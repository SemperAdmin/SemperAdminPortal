"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCOLink } from "./ui/MCOLink";
import { MCO_URLS } from "@/data/references";


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
  { id: "requirements", label: "Requirements by Grade" },
  { id: "snco-leadership", label: "SNCO Leadership School" },
  { id: "distance-education", label: "Distance Education" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function PMEContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Professional Military Education (PME)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Professional Military Education develops leadership, warfighting, and critical thinking skills required at each grade. PME completion is mandatory for promotion. MARADMIN 630/24 provides current EPME requirements by grade. The SNCO Leadership School (per MARADMIN 627/24) consolidated Career and Advanced Schools effective December 2024.
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
                  <td className="py-2 pr-4 font-medium">Requirement</td>
                  <td className="py-2">Mandatory for promotion</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Formats</td>
                  <td className="py-2">Resident, seminar, distance education</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Tracking</td>
                  <td className="py-2">MarineNet, MCTFS</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">SNCO Change</td>
                  <td className="py-2">SNCO Leadership School (MARADMIN 627/24)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Authority</td>
                  <td className="py-2"><MCOLink mco="MCO 1553.4B" url={MCO_URLS.PME} />, MARADMIN 630/24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PME Course Codes Reference</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Code</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Leading Marines DEP</td>
                  <td className="py-2 pr-4">EPME3000 / T8J</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">LCpl Seminar</td>
                  <td className="py-2 pr-4">341</td>
                  <td className="py-2">Resident</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Corporals Course DEP</td>
                  <td className="py-2 pr-4">EPME4000 / L9Q</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Corporals Course</td>
                  <td className="py-2 pr-4">C21</td>
                  <td className="py-2">Resident</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Sergeants School DEP</td>
                  <td className="py-2 pr-4">EPME5000 / T3W</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Sergeants School</td>
                  <td className="py-2 pr-4">T4M</td>
                  <td className="py-2">Resident</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Sergeants School Seminar</td>
                  <td className="py-2 pr-4">315</td>
                  <td className="py-2">Seminar</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Career School DEP</td>
                  <td className="py-2 pr-4">EPME6000 / T5P</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">Advanced School DEP</td>
                  <td className="py-2 pr-4">EPME7000 / T3X</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">SNCO Leadership School</td>
                  <td className="py-2 pr-4">31Q</td>
                  <td className="py-2">Resident</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">SNCO Leadership School Seminar</td>
                  <td className="py-2 pr-4">31R</td>
                  <td className="py-2">Seminar</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4">First Sergeants School</td>
                  <td className="py-2 pr-4">L64</td>
                  <td className="py-2">Resident</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">EJPME II</td>
                  <td className="py-2 pr-4">57X</td>
                  <td className="py-2">Online</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Requirements by Grade (Per MARADMIN 630/24)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Complete all required courses for your current grade before becoming eligible for promotion.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lance Corporal</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">EPME3000</td>
                  <td className="py-2 pr-4">Leading Marines Distance Education Program</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Course 341</td>
                  <td className="py-2 pr-4">Lance Corporal Leadership and Ethics Seminar</td>
                  <td className="py-2">Resident</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Corporal</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">EPME4000</td>
                  <td className="py-2 pr-4">Corporals Course Distance Education Program</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Course C21</td>
                  <td className="py-2 pr-4">Corporals Course</td>
                  <td className="py-2">Resident</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sergeant</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">EPME5000</td>
                  <td className="py-2 pr-4">Sergeants School Distance Education Program</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Course T4M</td>
                  <td className="py-2 pr-4">Sergeants School</td>
                  <td className="py-2">Resident</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Course 315</td>
                  <td className="py-2 pr-4">Sergeants School Seminar</td>
                  <td className="py-2">Seminar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic">Complete T4M OR 315 (one required).</p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Staff Sergeant</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">EPME6000</td>
                  <td className="py-2 pr-4">Career School Distance Education Program</td>
                  <td className="py-2">MarineNet (Required)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Course 31Q</td>
                  <td className="py-2 pr-4">SNCO Leadership School</td>
                  <td className="py-2">Resident (Recommended)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Course 31R</td>
                  <td className="py-2 pr-4">SNCO Leadership School Seminar</td>
                  <td className="py-2">Seminar (Recommended)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Gunnery Sergeant</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">EPME7000</td>
                  <td className="py-2 pr-4">Advanced School Distance Education Program</td>
                  <td className="py-2">MarineNet</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Course 31Q</td>
                  <td className="py-2 pr-4">SNCO Leadership School</td>
                  <td className="py-2">Resident</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Course 31R</td>
                  <td className="py-2 pr-4">SNCO Leadership School Seminar</td>
                  <td className="py-2">Seminar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic">Must complete SNCO Leadership School or Seminar if not completed as SSgt.</p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Senior Enlisted PME</h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Master Sergeant</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">No required PME. Recommended courses include Navy Senior Enlisted Academy, Air Force SNCOA, or Army SGM-A.</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">First Sergeant</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Course L64 - First Sergeants School (Required)</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Master Gunnery Sergeant</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Course 57X - Enlisted Joint PME II (Required)</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sergeant Major</h4>
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside mt-1 space-y-1">
                <li>O-5 CSEL: Cornerstone (Course L9L) + EJPME II</li>
                <li>O-6 CSEL: Cornerstone (Course 57T) + EJPME II</li>
                <li>O-7/O-8 CSEL: SELOC + Executive Education + SMMC Symposium</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    "snco-leadership": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SNCO Leadership School (Per MARADMIN 627/24)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Effective December 2024, Career School (SSgt) and Advanced School (GySgt) consolidated into SNCO Leadership School. EPME6000 (MarineNet) is required before attending SNCO Leadership School, regardless of grade.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Formats</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Duration</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Locations</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Resident</td>
                  <td className="py-2 pr-4">7 weeks</td>
                  <td className="py-2">Quantico, Camp Lejeune, Camp Pendleton, Okinawa</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Seminar</td>
                  <td className="py-2 pr-4">15 weeks</td>
                  <td className="py-2">Multiple locations, Fort Worth (online)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Reserve Component</td>
                  <td className="py-2 pr-4">2 weeks</td>
                  <td className="py-2">For SMCR and IMA Marines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transition Timeline</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Legacy resident Career and Advanced Schools offered through February 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Legacy CDET seminars offered through June 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>SNCO Leadership School Seminar begins July 2025</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PME Complete Status</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Grade</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Already Complete If</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">SSgt</td>
                  <td className="py-2">Legacy Career School + EPME6000</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">GySgt</td>
                  <td className="py-2">Legacy Career OR Advanced School + EPME7000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Attending Resident PME</h3>
          <h4 className="mt-4 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Nomination Process</h4>
          <ol className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Unit identifies Marines for school quotas</li>
            <li>S-3 coordinates school seat</li>
            <li>Marine notified of selection</li>
            <li>Orders issued</li>
            <li>Marine attends school</li>
            <li>Completion reported to MCTFS</li>
          </ol>
          <h4 className="mt-4 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preparation</h4>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
            <li>Review course prerequisites</li>
            <li>Complete required reading</li>
            <li>Physical fitness ready</li>
            <li>Uniform inspections ready</li>
            <li>Study Marine Corps knowledge</li>
          </ul>
        </section>
      </div>
    ),

    "distance-education": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Completing Distance Education PME
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Distance education PME allows you to complete requirements while maintaining your duty assignment. All EPME courses are available via MarineNet.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Via MarineNet</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Log into MarineNet (https://www.marinenet.usmc.mil)</li>
            <li>Search for required course (EPME3000, EPME4000, etc.)</li>
            <li>Enroll in course</li>
            <li>Complete all modules and exams</li>
            <li>Pass final exam</li>
            <li>Certificate generated automatically</li>
            <li>Completion reported to MCTFS</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Success</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Set study schedule</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Complete modules sequentially</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Take notes on key concepts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Review before exams</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Retake exams if needed (check policy)</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Verifying PME Completion</h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Via MarineNet</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Log into MarineNet</li>
                <li>View transcript</li>
                <li>Verify courses completed</li>
                <li>Download certificates</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Via MOL</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Log into MOL</li>
                <li>Navigate to Training</li>
                <li>View PME completion status</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Via BTR</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">PME completion reflected in Basic Training Record.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PME and Promotion</h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PME Completion Required</h4>
              <ul className="mt-2 list-disc list-inside">
                <li>Must complete PME for current grade before promotion</li>
                <li>Incomplete PME blocks promotion eligibility</li>
                <li>Verify PME status in MOL/MarineNet</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">JEPES Impact</h4>
              <p className="mt-2">PME completion affects Mental Agility component of JEPES for junior enlisted.</p>
            </div>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Completion Checklists
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Junior Enlisted</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Complete EPME3000 (LCpl requirement)",
              "Attend Lance Corporal Seminar",
              "Complete EPME4000 (Cpl requirement)",
              "Attend Corporals Course",
              "Verify completion in MarineNet",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NCO</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Complete EPME5000",
              "Attend Sergeants School (resident or seminar)",
              "Verify completion before promotion eligibility",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SNCO</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Complete EPME6000 (SSgt)",
              "Complete EPME7000 (GySgt)",
              "Attend SNCO Leadership School",
              "Complete grade-specific requirements",
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
