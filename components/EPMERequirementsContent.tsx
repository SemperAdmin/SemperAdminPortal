"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { CollapsibleSection } from "./ui/CollapsibleSection";
import { GraduationCap, AlertTriangle, BookOpen, Calendar, Users } from "lucide-react";

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
  { label: "Governing Order", value: "MCO 1553.4B - Professional Military Education" },
  { label: "AD/AR Requirements", value: "MARADMIN 630/24 (23 Dec 2024)" },
  { label: "Reserve Requirements", value: "MARADMIN 631/24 (23 Dec 2024)" },
  { label: "Major Change", value: "SNCO Leadership School replaces Career/Advanced School" },
  { label: "Reading Program", value: "5 titles annually per ALMAR 018/23" },
  { label: "EJPME Access", value: "JKOdirect.jten.mil" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "active-duty", label: "Active Duty" },
  { id: "reserve", label: "Reserve" },
  { id: "schedules", label: "Schedules" },
  { id: "references", label: "References", type: "references" as const },
];

const ACTIVE_DUTY_REQUIREMENTS = [
  {
    grade: "Private (Pvt) & Private First Class (PFC)",
    required: ["None"],
    recommended: ["T8J - EPME3000 Leading Marines DEP (PFC)", "MarineNet courses to improve Mental Agility PES score"],
  },
  {
    grade: "Lance Corporal (LCpl)",
    required: ["T8J - EPME3000 Leading Marines DEP", "341 - Lance Corporal Leadership and Ethics Seminar"],
    recommended: [],
  },
  {
    grade: "Corporal (Cpl)",
    required: ["L9Q - EPME4000 Corporals Course DEP", "C21 - Corporals Course (Resident)"],
    recommended: [],
  },
  {
    grade: "Sergeant (Sgt)",
    required: ["T3W - EPME5000 Sergeants School DEP", "T4M - Sergeants School (Resident) OR 315 - Sergeants School Seminar"],
    recommended: [],
  },
  {
    grade: "Staff Sergeant (SSgt)",
    required: ["T5P - EPME6000 Career School DEP"],
    recommended: ["31Q - SNCO Leadership School (Resident) OR 31R - SNCO Leadership School Seminar", "SEJPME I"],
  },
  {
    grade: "Gunnery Sergeant (GySgt)",
    required: ["T3X - EPME7000 Advanced School DEP", "31Q - SNCO Leadership School OR 31R - Seminar (if not completed as SSgt)"],
    recommended: ["SEJPME I and II", "Gateway Course (NDU)", "EWSDEP with waiver"],
  },
  {
    grade: "Master Sergeant (MSgt)",
    required: ["None"],
    recommended: ["NSE (Navy Senior Enlisted Academy)", "AF5 (Air Force SNCOA)", "RMY (Army SGM-A)", "EJPME I and II", "EWSDEP/CSCDEP with waiver"],
  },
  {
    grade: "First Sergeant (1stSgt)",
    required: ["L64 - First Sergeants School"],
    recommended: ["57D - Cornerstone (O-5 CSEL billet)", "NSE/AF5/RMY", "EJPME I and II"],
  },
  {
    grade: "Master Gunnery Sergeant (MGySgt)",
    required: ["57X - Enlisted Joint PME II"],
    recommended: ["L9L - Cornerstone (CSEL billets)", "57S - SELOC", "3BB - Keystone"],
  },
  {
    grade: "Sergeant Major (SgtMaj)",
    required: ["L9L - Cornerstone (O-5 CSEL) OR 57T - Cornerstone (O-6 CSEL)", "57X - Enlisted Joint PME II"],
    recommended: ["O-7/O-8 CSEL: 57S - SELOC, Executive Education Program, SMMC Symposium (annually)"],
  },
];

const IRR_REQUIREMENTS = [
  { grade: "LCpl", course: "T8J (EPME3000)" },
  { grade: "Cpl", course: "L9Q (EPME4000)" },
  { grade: "Sgt", course: "T3W (EPME5000)" },
  { grade: "SSgt", course: "T5P (EPME6000)" },
  { grade: "GySgt", course: "T3X (EPME7000)" },
  { grade: "MSgt/MGySgt", course: "No requirement" },
];

const FIRST_SGT_SCHEDULE = [
  { course: "1-26", classCode: "2026001", convene: "08 Dec 25", graduate: "19 Dec 25" },
  { course: "2-26", classCode: "2026002", convene: "02 Feb 26", graduate: "13 Feb 26" },
  { course: "3-26", classCode: "2026003", convene: "23 Mar 26", graduate: "03 Apr 26" },
  { course: "4-26", classCode: "2026004", convene: "01 Jun 26", graduate: "12 Jun 26" },
  { course: "5-26", classCode: "2026005", convene: "17 Aug 26", graduate: "28 Aug 26" },
];

export function EPMERequirementsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={GraduationCap} title="Enlisted Professional Military Education" variant="info">
          EPME is essential for your career progression. MARADMIN 630/24 and 631/24 establish current
          requirements by grade for Active Duty, Active Reserve, SMCR, IRR, and IMA Marines.
          MCO 1553.4B is the governing order for all PME.
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

        <InfoCard icon={AlertTriangle} title="Major Change: SNCO Leadership School" variant="warning">
          <p className="mt-2">
            Effective December 2024 (MARADMIN 627/24): PME for Staff Sergeants (Career School) and
            Gunnery Sergeants (Advanced School) has been consolidated into one school: the SNCO Leadership School.
          </p>
          <div className="mt-4 grid gap-2 text-sm md:grid-cols-2">
            <div className="rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
              <strong>Resident:</strong> 7 weeks (31Q)
            </div>
            <div className="rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
              <strong>Seminar:</strong> 15 weeks (31R)
            </div>
            <div className="rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
              <strong>Reserve:</strong> 2 weeks (R2V)
            </div>
            <div className="rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
              <strong>Prerequisite:</strong> EPME6000 (MarineNet)
            </div>
          </div>
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transition Rules
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-green-500">&#10003;</span>
              <span><strong>SSgts:</strong> Legacy Career School + EPME6000 = PME complete</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">&#10003;</span>
              <span><strong>GySgts:</strong> Legacy Career OR Advanced School + EPME7000 = PME complete</span>
            </li>
          </ul>
        </section>

        <InfoCard icon={BookOpen} title="Professional Reading Program" variant="default">
          Per ALMAR 018/23, all ranks read five titles annually from the Commandant&apos;s Professional
          Reading Program.
        </InfoCard>
      </div>
    ),

    "active-duty": (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Active Duty & Active Reserve Requirements" variant="info">
          Per MARADMIN 630/24 (23 Dec 2024). Each grade has required and recommended PME courses.
        </InfoCard>

        {ACTIVE_DUTY_REQUIREMENTS.map((req) => (
          <CollapsibleSection key={req.grade} title={req.grade} defaultOpen={req.grade.includes("SSgt") || req.grade.includes("Sgt)")}>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Required PME:</h4>
                {req.required[0] === "None" ? (
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">None</p>
                ) : (
                  <ul className="mt-2 space-y-1">
                    {req.required.map((course) => (
                      <li key={course} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="text-green-500">&#10003;</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {req.recommended.length > 0 && (
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Recommended:</h4>
                  <ul className="mt-2 space-y-1">
                    {req.recommended.map((course) => (
                      <li key={course} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-500">
                        <span className="text-blue-500">&#9679;</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    ),

    reserve: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Reserve Component Requirements" variant="info">
          Per MARADMIN 631/24 (23 Dec 2024) - SMCR/IMA/IRR. Marines who complete an Active Duty
          school equivalent are considered PME complete for that grade.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SMCR/IMA Key Differences
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Grade</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Reserve Option</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Corporal</td>
                  <td className="py-3 text-zinc-600 dark:text-zinc-400">C19 (Reserve Corporals Course) OR C21</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Sergeant</td>
                  <td className="py-3 text-zinc-600 dark:text-zinc-400">315 (Seminar) OR CFF (Reserve Sergeants School)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">SSgt/GySgt</td>
                  <td className="py-3 text-zinc-600 dark:text-zinc-400">R2V (Reserve SNCO Leadership School, 2 weeks) OR 31R (Seminar)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            IRR Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            IRR Marines have distance education program requirements only:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Grade</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Required Course</th>
                </tr>
              </thead>
              <tbody>
                {IRR_REQUIREMENTS.map((req) => (
                  <tr key={req.grade} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{req.grade}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{req.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    schedules: (
      <div className="space-y-6">
        <InfoCard icon={Calendar} title="First Sergeants School FY26 Schedule" variant="info">
          Per MARADMIN 281/25. Max 50 seats per class, first-come first-served.
          Attendance recommended within 12 months of promotion/frocking.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FY26 Class Dates
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Class Code</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Convene</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Graduate</th>
                </tr>
              </thead>
              <tbody>
                {FIRST_SGT_SCHEDULE.map((cls) => (
                  <tr key={cls.course} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{cls.course}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{cls.classCode}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{cls.convene}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{cls.graduate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Registration
          </h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <strong>Who submits:</strong> Parent command G-3/S-3
            </p>
            <p>
              <strong>Submit to:</strong> MCU_seniorenlistedacademy@usmcu.edu (ATTN: Operations/1stSgt)
            </p>
            <p>
              <strong>Reserve Marines:</strong> Course 1-26 recommended
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Education Resources
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">USMCU CEME</h4>
              <p className="mt-1 text-xs text-zinc-500">Education Continuum Table</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">JKO Direct</h4>
              <p className="mt-1 text-xs text-zinc-500">EJPME I and II courses</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MarineNet</h4>
              <p className="mt-1 text-xs text-zinc-500">Distance Education Programs (DEP)</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MCTIMS</h4>
              <p className="mt-1 text-xs text-zinc-500">Training Records</p>
            </div>
          </div>
        </section>

        <InfoCard icon={BookOpen} title="Contact Information" variant="default">
          <ul className="mt-2 space-y-1 text-sm">
            <li><strong>CEME POC:</strong> MCU_CEME@USMCU.EDU, (703) 432-5262</li>
            <li><strong>CDET POC:</strong> TIMOTHY.DEVLIN@USMCU.EDU, (703) 432-5684</li>
            <li><strong>1stSgt School:</strong> MCU_seniorenlistedacademy@usmcu.edu</li>
          </ul>
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
