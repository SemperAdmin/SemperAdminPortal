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
  { label: "Primary System", value: "MCTFS (Marine Corps Total Force System)" },
  { label: "Training Record", value: "BTR (Basic Training Record)" },
  { label: "Access", value: "MOL (Marine Online)" },
  { label: "PME Tracking", value: "Enlisted/Officer PME Continuum" },
  { label: "MOS Schools", value: "Formal schools tracked via Unit Diary" },
  { label: "Authority", value: "MCO 1553.4B (Training and Readiness Manual)" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "pme", label: "PME Records" },
  { id: "mos-schools", label: "MOS & Schools" },
  { id: "certifications", label: "Certifications" },
  { id: "corrections", label: "Corrections" },
  { id: "references", label: "References", type: "references" as const },
];

const PME_ENLISTED = [
  { level: "Lance Corporal Seminar", code: "E4A", required: "Before promotion to Cpl" },
  { level: "Corporals Course", code: "E5A", required: "Before promotion to Sgt" },
  { level: "Sergeants Course", code: "E6A", required: "Before promotion to SSgt" },
  { level: "Career Course", code: "E7A", required: "Before promotion to GySgt" },
  { level: "Advanced Course", code: "E8A", required: "Before promotion to MSgt/1stSgt" },
  { level: "Sergeants Major Course", code: "E9A", required: "Before promotion to SgtMaj" },
];

const PME_OFFICER = [
  { level: "The Basic School (TBS)", code: "O2A", required: "All officers" },
  { level: "Expeditionary Warfare School", code: "O4A", required: "Captain" },
  { level: "Command and Staff College", code: "O5A", required: "Major/LtCol" },
  { level: "Marine Corps War College", code: "O6A", required: "Col select" },
];

const COMMON_TRAINING = [
  { training: "Rifle Qualification", frequency: "Annual", diary_code: "RIF" },
  { training: "Pistol Qualification", frequency: "As required by billet", diary_code: "PIS" },
  { training: "PFT", frequency: "Annual", diary_code: "PFT" },
  { training: "CFT", frequency: "Annual", diary_code: "CFT" },
  { training: "Swim Qualification", frequency: "Per MOS requirement", diary_code: "SWM" },
  { training: "Gas Mask Confidence", frequency: "Annual", diary_code: "GMC" },
  { training: "SAPR Training", frequency: "Annual", diary_code: "SAP" },
  { training: "Cyber Awareness", frequency: "Annual", diary_code: "CYB" },
];

const MOS_SCHOOL_TYPES = [
  { type: "Entry-Level MOS School", description: "Initial MOS training after recruit training" },
  { type: "Advanced MOS School", description: "Advanced skill training in primary MOS" },
  { type: "Additional MOS School", description: "Training for secondary MOS" },
  { type: "B-Billet Schools", description: "Recruiter, DI, MSG duty training" },
  { type: "Functional Skills", description: "Specific job-related training" },
];

const CERTIFICATION_TYPES = [
  "Military Licenses (vehicle, equipment)",
  "HAZMAT Certification",
  "Security Manager Certification",
  "Safety Certification",
  "Instructor Certifications",
  "Technical Certifications",
  "First Aid/CPR",
  "Collateral Duty Inspector",
];

const CORRECTION_STEPS = [
  { step: "Identify discrepancy", action: "Compare BTR to training records/certificates" },
  { step: "Gather documentation", action: "Obtain copies of completion certificates" },
  { step: "Submit to S-3/Training", action: "Request Unit Diary update" },
  { step: "Unit Diary entry", action: "S-1 processes diary with training code" },
  { step: "Verify BTR", action: "Check MOL for updated record" },
];

const COMMON_ISSUES = [
  { issue: "Missing PME credit", solution: "Verify completion certificate, submit to S-3 for diary" },
  { issue: "Incorrect PFT/CFT score", solution: "Verify score sheet, submit correction via S-3" },
  { issue: "Missing rifle qualification", solution: "Obtain qualification card copy, diary entry" },
  { issue: "School completion not showing", solution: "Contact school, obtain completion letter" },
  { issue: "Wrong completion date", solution: "Provide documentation, submit correction" },
];

export function TrainingRecordUpdatesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Training Record Updates Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Training records document a Marine&apos;s professional military education, MOS training,
            qualifications, and certifications. Accurate training records are essential for promotions,
            assignments, and career progression. The Basic Training Record (BTR) in MCTFS contains
            the official training history accessible via MOL.
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
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Training Record Components
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">BTR (Basic Training Record)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• PME completion dates</li>
                <li>• MOS school completions</li>
                <li>• Physical fitness scores</li>
                <li>• Rifle/Pistol qualifications</li>
                <li>• Swim qualifications</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">SRB/OQR Training Section</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Formal school certificates</li>
                <li>• Correspondence course completions</li>
                <li>• Special qualifications</li>
                <li>• Certifications and licenses</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Admin Responsibility</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Ensure all training completions are properly documented via Unit Diary entries. Coordinate
            with S-3/Training section for training record updates. Marines should verify their BTR
            regularly via MOL and report discrepancies immediately.
          </p>
        </section>
      </div>
    ),

    pme: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enlisted PME Continuum
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">PME Level</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Code</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Required</th>
                </tr>
              </thead>
              <tbody>
                {PME_ENLISTED.map((row) => (
                  <tr key={row.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.level}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{row.code}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Officer PME Continuum
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">PME Level</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Code</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Required</th>
                </tr>
              </thead>
              <tbody>
                {PME_OFFICER.map((row) => (
                  <tr key={row.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.level}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{row.code}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Record Update Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Receive completion certificate from school",
              "Verify certificate has correct information",
              "Submit certificate copy to S-3/Training",
              "S-3 coordinates with S-1 for Unit Diary entry",
              "Verify BTR update via MOL",
              "File copy in SRB/OQR",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Seminar vs. Resident PME</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Both seminar (unit-hosted) and resident (formal school) PME carry equal weight for promotion
            purposes. Ensure all completions are documented regardless of venue. Seminar completions
            must be reported via Unit Diary by the hosting unit.
          </p>
        </section>
      </div>
    ),

    "mos-schools": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MOS School Types
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {MOS_SCHOOL_TYPES.map((row) => (
                  <tr key={row.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.type}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Training Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Training</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Frequency</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Diary Code</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_TRAINING.map((row) => (
                  <tr key={row.training} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.training}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{row.frequency}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.diary_code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            School Completion Documentation
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Required Documents</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Completion certificate</li>
                <li>• School graduation letter</li>
                <li>• Training jacket (if applicable)</li>
                <li>• Any special qualification letters</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Process</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• School reports completion to MCTFS</li>
                <li>• Gaining unit verifies BTR update</li>
                <li>• If missing, contact school admin</li>
                <li>• Request copy of graduation roster</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">MOS Assignment</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Upon MOS school completion, the Marine is assigned the MOS via Unit Diary. Primary MOS (PMOS)
            is the main occupational specialty. Additional MOSs (AMOS) are secondary specialties. Free MOSs
            (FMOS) are additional skills not tied to a specific billet.
          </p>
        </section>
      </div>
    ),

    certifications: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Certification Types
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {CERTIFICATION_TYPES.map((cert) => (
              <li key={cert} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Military Licenses
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">OF 346 (License)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Military driver&apos;s license</li>
                <li>• Lists authorized vehicle types</li>
                <li>• Required for operating government vehicles</li>
                <li>• Must be renewed periodically</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Equipment Licenses</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Heavy equipment operator</li>
                <li>• Aircraft handling</li>
                <li>• Special equipment</li>
                <li>• Tracked per unit SOP</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Certification Tracking
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Where Tracked</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• BTR in MCTFS (some certifications)</li>
                <li>• SRB/OQR document side</li>
                <li>• Unit training files</li>
                <li>• COOL (Credentialing Opportunities On-Line)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Expiration Tracking</h4>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                Many certifications expire. Maintain a tracking system to ensure renewals are completed
                before expiration. Expired certifications may affect mission readiness and billet assignments.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            COOL Program
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Credentialing Opportunities On-Line helps Marines identify and obtain civilian credentials
            related to their MOS:
          </p>
          <ul className="mt-4 space-y-1 list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Identifies civilian certifications matching MOS skills</li>
            <li>Provides funding information for credentialing exams</li>
            <li>Tracks credential progress</li>
            <li>Valuable for transition planning</li>
          </ul>
        </section>
      </div>
    ),

    corrections: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Training Record Correction Process
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Step</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {CORRECTION_STEPS.map((row) => (
                  <tr key={row.step} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.step}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Issues and Solutions
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Solution</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_ISSUES.map((row) => (
                  <tr key={row.issue} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.issue}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Documentation Required
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Copy of completion certificate",
              "School graduation roster (if certificate unavailable)",
              "Score sheets for PFT/CFT/rifle qual",
              "Verification letter from training authority",
              "Any official correspondence",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-red)] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Escalation Path
          </h3>
          <ol className="mt-4 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>S-3/Training section (first point of contact)</li>
            <li>S-1/Admin (Unit Diary processing)</li>
            <li>IPAC (if unit cannot resolve)</li>
            <li>Training Command (for school records)</li>
            <li>MMRP (for OMPF corrections via ORMA)</li>
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Promotion Impact</h4>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            Missing PME or incorrect training records can affect promotion eligibility. Ensure all
            required training is properly documented before cutting scores are calculated. Report
            discrepancies immediately to allow time for correction.
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
