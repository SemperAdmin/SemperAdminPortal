"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

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

const KEY_POINTS = [
  { label: "Authority", value: "MCO 1553.4B, MARADMIN 630/24" },
  { label: "SNCO School Change", value: "MARADMIN 627/24 (December 2024)" },
  { label: "Previous EPME Message", value: "MARADMIN 474/21 (canceled)" },
  { label: "PME Continuum", value: "https://www.usmcu.edu/CEME/" },
  { label: "Professional Reading", value: "5 titles annually per ALMAR 018/23" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "junior-enlisted", label: "Junior Enlisted" },
  { id: "nco", label: "NCO" },
  { id: "snco", label: "SNCO" },
  { id: "snco-leadership-school", label: "SNCO Leadership School" },
  { id: "tracking", label: "Tracking PME" },
  { id: "references", label: "References", type: "references" as const },
];

const JUNIOR_ENLISTED_PME = [
  {
    grade: "Private (Pvt)",
    required: "None",
    recommended: "Complete MarineNet courses with CEUs to improve Mental Agility PES score",
  },
  {
    grade: "Private First Class (PFC)",
    required: "None",
    recommended: "EPME3000 - Leading Marines Distance Education Program (Course T8J); Complete MarineNet courses with CEUs",
  },
  {
    grade: "Lance Corporal (LCpl)",
    required: "EPME3000 - Leading Marines DEP (Course T8J); Lance Corporal Leadership and Ethics Seminar (Course 341)",
    recommended: "Complete MarineNet courses with CEUs to improve Mental Agility PES score",
  },
];

const NCO_PME = [
  {
    grade: "Corporal (Cpl)",
    required: "EPME4000 - Corporals Course DEP (Course L9Q); Corporals Course (Course C21)",
    recommended: "Complete MarineNet courses with CEUs to improve Mental Agility PES score",
  },
  {
    grade: "Sergeant (Sgt)",
    required: "EPME5000 - Sergeants School DEP (Course T3W); Sergeants School Resident (Course T4M) OR Sergeants School Seminar (Course 315)",
    recommended: "Begin preparing for SNCO responsibilities",
  },
];

const SNCO_PME = [
  {
    grade: "Staff Sergeant (SSgt)",
    required: "EPME6000 - Career School DEP (Course T5P)",
    recommended: "SNCO Leadership School (Course 31Q) OR Seminar (Course 31R); Senior Enlisted Joint PME I (JKOdirect)",
  },
  {
    grade: "Gunnery Sergeant (GySgt)",
    required: "EPME7000 - Advanced School DEP (Course T3X); SNCO Leadership School (if not completed as SSgt)",
    recommended: "Senior Enlisted Joint PME I and II; Gateway Course (NDU); EWSDEP with approved waiver",
  },
  {
    grade: "Master Sergeant (MSgt)",
    required: "None",
    recommended: "Navy Senior Enlisted Academy (NAVSEA); Air Force SNCOA; Army SGM-A; Joint PME I and II; JSOFSEA",
  },
  {
    grade: "First Sergeant (1stSgt)",
    required: "First Sergeants School (Course L64)",
    recommended: "Cornerstone (Course 57D) for O-5 CSEL slated; NAVSEA, AFSNCOA, or SGM-A; Joint PME I and II",
  },
  {
    grade: "Master Gunnery Sergeant (MGySgt)",
    required: "Enlisted Joint PME II (Course 57X via JKOdirect)",
    recommended: "Cornerstone (Course L9L) for CSEL billets; SELOC (Course 57S); Keystone (Course 3BB)",
  },
  {
    grade: "Sergeant Major (SgtMaj)",
    required: "Cornerstone O-5/O-6 CSEL (Course L9L or 57T); Enlisted Joint PME II (Course 57X)",
    recommended: "Keystone (Course 3BB) for O-6 level; JSOFSEA; EWSDEP or CSCDEP with waiver",
  },
];

const SNCO_SCHOOL_FORMATS = [
  { format: "Resident", duration: "7 weeks", availability: "MCB Quantico, Camp Lejeune, Camp Pendleton, Okinawa" },
  { format: "Seminar", duration: "15 weeks", availability: "Multiple locations including Fort Worth (online)" },
  { format: "Reserve Component", duration: "2 weeks", availability: "For SMCR and IMA Marines" },
];

export function EPMERequirementsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enlisted Professional Military Education (EPME)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Professional Military Education is a key component for continuous development of enlisted Marines.
            MARADMIN 630/24 (December 2024) provides the current EPME requirements by grade. Completing required
            PME is mandatory for promotion eligibility. MARADMIN 627/24 announced the new SNCO Leadership School
            consolidating Career and Advanced Schools.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                  <th className="py-2 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            December 2024 Changes
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <p className="font-medium text-amber-800 dark:text-amber-200">SNCO Leadership School</p>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Per MARADMIN 627/24, PME for Staff Sergeants (Career School) and Gunnery Sergeants (Advanced School)
                has been consolidated into one school: the SNCO Leadership School, effective December 2024.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="font-medium text-blue-800 dark:text-blue-200">Updated Requirements</p>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                MARADMIN 630/24 provides the current EPME requirements for Active Duty and Active Reserve Marines,
                canceling the previous MARADMIN 474/21.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    "junior-enlisted": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Junior Enlisted PME Requirements
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            PME requirements for Privates through Lance Corporals per MARADMIN 630/24.
          </p>
          <div className="mt-4 space-y-4">
            {JUNIOR_ENLISTED_PME.map((item) => (
              <div key={item.grade} className="rounded-lg border border-black/5 p-4 dark:border-white/10">
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.grade}</h4>
                <div className="mt-2 space-y-2">
                  <div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Required PME: </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.required}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Recommended: </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.recommended}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Courses for Junior Enlisted
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Code</th>
                  <th className="py-2 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Leading Marines DEP</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">EPME3000 / T8J</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Distance education program for foundational leadership</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">LCpl Leadership &amp; Ethics Seminar</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course 341</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Required seminar for Lance Corporals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    nco: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NCO PME Requirements
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            PME requirements for Corporals and Sergeants per MARADMIN 630/24.
          </p>
          <div className="mt-4 space-y-4">
            {NCO_PME.map((item) => (
              <div key={item.grade} className="rounded-lg border border-black/5 p-4 dark:border-white/10">
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.grade}</h4>
                <div className="mt-2 space-y-2">
                  <div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Required PME: </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.required}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Recommended: </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.recommended}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Courses for NCOs
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Code</th>
                  <th className="py-2 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Corporals Course DEP</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">EPME4000 / L9Q</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Distance education prerequisite for Corporals Course</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Corporals Course (Resident)</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course C21</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Required resident course for Corporals</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Sergeants School DEP</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">EPME5000 / T3W</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Distance education prerequisite for Sergeants School</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Sergeants School (Resident)</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course T4M</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Resident course option for Sergeants</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Sergeants School (Seminar)</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course 315</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Seminar option for Sergeants</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    snco: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SNCO PME Requirements
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            PME requirements for Staff Sergeants through Sergeants Major per MARADMIN 630/24.
          </p>
          <div className="mt-4 space-y-4">
            {SNCO_PME.map((item) => (
              <div key={item.grade} className="rounded-lg border border-black/5 p-4 dark:border-white/10">
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.grade}</h4>
                <div className="mt-2 space-y-2">
                  <div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Required PME: </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.required}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Recommended: </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.recommended}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Senior Enlisted Leader Courses
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Code</th>
                  <th className="py-2 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Cornerstone O-5 CSEL</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course L9L</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">For 1stSgts/SgtsMaj slated to O-5 CSEL billets</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Cornerstone O-6 CSEL</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course 57T</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">For SgtsMaj slated to O-6 CSEL billets</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">SELOC</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course 57S</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Slated Enlisted Leaders Orientation Course</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Keystone</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course 3BB</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">By nomination from Force Level SgtMaj</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Enlisted Joint PME II</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Course 57X</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Via JKOdirect.jten.mil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "snco-leadership-school": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SNCO Leadership School
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Per MARADMIN 627/24, effective December 2024, PME for Staff Sergeants (Career School) and Gunnery
            Sergeants (Advanced School) has been consolidated into one school: the <strong>SNCO Leadership School</strong>.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Available Formats
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                  <th className="py-2 pr-4 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Duration</th>
                  <th className="py-2 text-left font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Availability</th>
                </tr>
              </thead>
              <tbody>
                {SNCO_SCHOOL_FORMATS.map((item) => (
                  <tr key={item.format} className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.format}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.duration}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Prerequisites</h3>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>EPME6000</strong> (MarineNet) is a prerequisite to attend SNCO Leadership School, regardless of grade.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transition Guidance</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              Legacy resident Career and Advanced Schools offered through February 2025
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              Legacy CDET Career and Advanced School Seminars offered through June 2025
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              SNCO Leadership School Seminar included in Academic Year 26 schedules beginning July 2025
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PME Complete Criteria</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-black/5 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Staff Sergeants</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                SSgts who completed legacy Career School (resident or seminar) AND EPME6000 are PME complete for grade.
                No requirement to complete SNCO Leadership School.
              </p>
            </div>
            <div className="rounded-lg border border-black/5 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Gunnery Sergeants</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                GySgts who completed either legacy Career or Advanced School (resident or seminar) AND EPME7000 are PME
                complete for grade. No requirement to complete SNCO Leadership School.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    tracking: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Completion Tracking
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Track your PME completion status through official Marine Corps systems to ensure your record
            accurately reflects your professional development.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Via MOL</h3>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <span>Log into Marine Online</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <span>Navigate to Training tab</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <span>View PME completion status</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <span>Verify courses completed match grade requirements</span>
            </li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Via MarineNet</h3>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <span>Log into MarineNet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <span>View transcript</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <span>Verify distance education courses complete</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <span>Download completion certificates</span>
            </li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              <span><strong>CEME Website:</strong> https://www.usmcu.edu/CEME/</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              <span><strong>MarineNet:</strong> Distance education courses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              <span><strong>JKOdirect:</strong> Joint PME courses (https://jkodirect.jten.mil)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              <span><strong>Unit S-3:</strong> Resident school quotas and scheduling</span>
            </li>
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
