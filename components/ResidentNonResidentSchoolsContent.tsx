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
  { id: "school-formats", label: "School Formats" },
  { id: "school-quota-process", label: "School Quota Process" },
  { id: "preparation", label: "Preparation" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function ResidentNonResidentSchoolsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resident and Non-Resident Schools
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Military education is delivered through resident (in-person) and non-resident (distance/seminar) formats. Resident schools provide immersive learning experiences while non-resident options allow education while maintaining duty assignments. Both formats satisfy PME requirements when completed successfully.
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
                  <td className="py-2 pr-4 font-medium">Resident</td>
                  <td className="py-2">Full-time attendance at school location</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Non-Resident</td>
                  <td className="py-2">Distance education or seminar format</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">PME Credit</td>
                  <td className="py-2">Both satisfy requirements</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Selection</td>
                  <td className="py-2">Based on quotas, availability, command nomination</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Locations</td>
                  <td className="py-2">MCCEE, regional academies, other installations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "school-formats": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resident School Benefits
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefit</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Immersive learning</td>
                  <td className="py-2">Full focus on curriculum</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Networking</td>
                  <td className="py-2">Build relationships with peers</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Guest speakers</td>
                  <td className="py-2">Access to senior leaders</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Practical exercises</td>
                  <td className="py-2">Hands-on application</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Structured environment</td>
                  <td className="py-2">Dedicated study time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Resident School Benefits</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefit</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Flexibility</td>
                  <td className="py-2">Study while at unit</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">No PCS/TAD</td>
                  <td className="py-2">Remain with family</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Self-paced</td>
                  <td className="py-2">Complete on your schedule</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Accessibility</td>
                  <td className="py-2">Available to more Marines</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Career continuity</td>
                  <td className="py-2">No time away from duties</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resident School Locations</h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Corps University (Quantico)</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Enlisted Professional Military Education</li>
                <li>Officer Professional Military Education</li>
                <li>Command and Staff College</li>
                <li>School of Advanced Warfighting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Regional SNCO Academies</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Camp Lejeune, NC</li>
                <li>Camp Pendleton, CA</li>
                <li>Okinawa, Japan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Other Locations</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Service schools (Army, Navy, Air Force)</li>
                <li>Joint schools</li>
                <li>Specialty schools</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Resident Options</h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MarineNet Distance Education</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>EPME courses (3000-7000 series)</li>
                <li>Self-paced online learning</li>
                <li>Available 24/7</li>
                <li>Completion tracked automatically</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Seminar Programs</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Part-time attendance (evenings/weekends)</li>
                <li>Combination of online and in-person</li>
                <li>SNCO Leadership School Seminar (15 weeks)</li>
                <li>Multiple locations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">College of Distance Education and Training (CDET)</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Administers seminar programs</li>
                <li>Coordinates non-resident PME</li>
                <li>Supports reserve component education</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    "school-quota-process": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            School Quota Process
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            School seats are allocated through a quota system managed by HQMC and distributed to commands based on need and availability.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Marines Are Selected</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>HQMC allocates quotas to commands</li>
            <li>Commands identify eligible Marines</li>
            <li>S-3 coordinates nominations</li>
            <li>Command prioritizes based on need</li>
            <li>Orders issued for selected Marines</li>
            <li>Marines attend assigned class</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Factors in Selection</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Promotion eligibility timeline</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Deployment schedule</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Billet requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Performance record</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Command recommendation</span>
            </li>
          </ul>
        </section>
      </div>
    ),

    preparation: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Preparing for Resident School
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Departure</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Complete prerequisites (distance education)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Review course materials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Physical fitness preparation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Uniform preparation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Administrative requirements (orders, travel)</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pack List</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Service uniforms (as required)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>PT gear</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Study materials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Personal items</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Laptop (if authorized)</span>
            </li>
          </ul>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            School Attendance Checklists
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resident School</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Complete prerequisites",
              "Receive orders",
              "Arrange travel",
              "Prepare uniforms",
              "Review pre-course materials",
              "Coordinate family support (if needed)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Resident/Seminar</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Enroll in course",
              "Set study schedule",
              "Coordinate with supervisor",
              "Complete assignments on time",
              "Attend seminar sessions (if applicable)",
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
