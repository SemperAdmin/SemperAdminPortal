"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { GraduationCap, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "contents", label: "Record Contents" },
  { id: "verification", label: "Verification" },
  { id: "actions", label: "What You Should Do" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "MCTIMS", value: "The Marine Corps Training Information Management System is the official digital record. If it's not in MCTIMS, it didn't happen in the eyes of a promotion board" },
  { label: "PME Completion", value: "Ensure your Resident and Non-Resident (MarineNet) courses are properly recorded" },
  { label: "Range/Physical Fitness", value: "Verify that your most recent Rifle, Pistol, PFT, and CFT scores are accurate—errors directly impact your JEPES score" },
  { label: "Promotion Impact", value: "Training records contribute to your composite score and are reviewed by promotion boards" },
];

const RECORD_CONTENTS = [
  { category: "Professional Military Education (PME)", items: ["Corporals Course", "Sergeants Course", "Career Course", "Advanced Course", "Resident/Non-Resident designations"], impact: "Required for promotion" },
  { category: "MOS Training", items: ["MOS School completion", "Advanced MOS courses", "Special qualifications", "NEC codes"], impact: "Affects assignment eligibility" },
  { category: "Weapons Qualifications", items: ["Rifle qualification score", "Pistol qualification score", "Crew-served weapons", "Qualification dates"], impact: "Affects composite score" },
  { category: "Physical Fitness", items: ["PFT scores and dates", "CFT scores and dates", "Body composition data", "Remedial fitness status"], impact: "Affects composite score" },
  { category: "Additional Training", items: ["MarineNet courses", "COOL certifications", "Civilian education credits", "Special skills (MCMAP, etc.)"], impact: "Enhances record" },
];

const VERIFICATION_STEPS = [
  "Log into Marine Online (MOL)",
  "Navigate to 'Individual Records' → 'Personal Performance'",
  "Review each training category for accuracy",
  "Compare against personal certificates and documentation",
  "Note any discrepancies for correction",
  "Contact S-3/Training NCO with documentation to correct errors",
];

const ACTION_ITEMS = [
  "Verify MOL: Check your 'Personal Performance' tab on MOL at least once a month to catch errors early",
  "Save Certificates: Always download and save a PDF of your MarineNet course certificates. If the system glitches, your certificate is the only proof",
  "Audit Your Record: Before a promotion or board, sit down with your unit Training NCO to audit your jacket and ensure all awards and schools are listed",
  "Document Everything: Keep a personal folder with copies of all training certificates, range cards, and PFT/CFT score sheets",
  "Report Discrepancies: Don't wait—if you find an error, bring documentation to your Training NCO immediately",
];

const SCORE_IMPACTS = [
  { element: "Rifle Qualification", points: "Expert: 100 pts | Sharpshooter: 85 pts | Marksman: 65 pts" },
  { element: "PFT Score", points: "Max 100 points for 300 PFT (scaled based on score)" },
  { element: "CFT Score", points: "Max 100 points for 300 CFT (scaled based on score)" },
  { element: "PME Completion", points: "Required for promotion; not completing blocks advancement" },
];

const COMMON_ISSUES = [
  { issue: "Missing MarineNet Courses", solution: "Download your course completion certificate and bring it to the Training NCO. They can manually add the entry if the system didn't sync." },
  { issue: "Incorrect Range Scores", solution: "Provide a copy of your signed range scorecard. The unit Armorer or Range Coach should have the official record." },
  { issue: "PFT/CFT Not Updated", solution: "Ensure your scores were entered into MCTFS by the PTI or S-3. Bring a copy of the score sheet if needed." },
  { issue: "PME Not Showing as Complete", solution: "Contact the schoolhouse or MarineNet support. Resident courses require school certification; non-resident requires final exam completion." },
  { issue: "Schools Not on Record", solution: "Obtain official documentation (diploma, certificate, 1059) from the school. Some schools take 30-60 days to report completion." },
];

export function TrainingJacketsContent({ data }: Props) {
  return (
    <TabbedContentLayout
      tabs={TABS}
      data={data}
      content={{
        overview: (
          <div className="space-y-6">
            <InfoCard icon={GraduationCap} title="Training Jackets Overview" variant="info">
              Your training jacket (often managed via MCTIMS or a physical &quot;Green Folder&quot;) tracks your professional development, range scores, PFT/CFT data, and Professional Military Education (PME). This record is <strong>critical for promotion boards</strong> and directly impacts your JEPES composite score.
            </InfoCard>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h2>
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
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Impact on Composite Score</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Element</th>
                      <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Point Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCORE_IMPACTS.map((item) => (
                      <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200">Promotion Boards</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                If your training record shows a lower rifle score or missing PME, that&apos;s what the promotion board sees—even if you actually shot Expert or completed the course. <strong>Verify your record before the board convenes.</strong>
              </p>
            </section>
          </div>
        ),
        contents: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training Record Contents</h2>
              <div className="mt-4 space-y-4">
                {RECORD_CONTENTS.map((category) => (
                  <div key={category.category} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{category.category}</h3>
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {category.impact}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Where Records Are Stored</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MCTIMS</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>• Official training database</li>
                    <li>• Used for promotion calculations</li>
                    <li>• Feeds MOL displays</li>
                    <li>• Updated by Training NCOs</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Physical Training Jacket</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>• Hard copy certificates</li>
                    <li>• Range cards and score sheets</li>
                    <li>• School completion documents</li>
                    <li>• Maintained at unit S-3</li>
                  </ul>
                </div>
              </div>
            </section>
            <InfoCard icon={CheckCircle} title="Documentation is Proof" variant="default">
              Always keep personal copies of every training certificate, range scorecard, and PME completion certificate. If MCTIMS doesn&apos;t reflect your accomplishments, your documentation is the proof needed to correct the record.
            </InfoCard>
          </div>
        ),
        verification: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Verify Your Training Record</h2>
              <div className="mt-6 space-y-4">
                {VERIFICATION_STEPS.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <Clock className="h-5 w-5" />What to Check
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; <strong>Rifle Score:</strong> Verify your most recent annual qualification score and date</li>
                <li>&bull; <strong>Pistol Score:</strong> If applicable, verify qualification score and date</li>
                <li>&bull; <strong>PFT Score:</strong> Confirm your most recent PFT score matches what you actually ran</li>
                <li>&bull; <strong>CFT Score:</strong> Confirm your most recent CFT score is accurate</li>
                <li>&bull; <strong>PME Courses:</strong> Verify all completed courses show as complete (resident or non-resident)</li>
                <li>&bull; <strong>MOS Schools:</strong> Ensure all formal schools are listed with completion dates</li>
                <li>&bull; <strong>Additional Quals:</strong> Check MCMAP belts, swim quals, special skills</li>
              </ul>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When to Verify</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Monthly</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Quick MOL check</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">After Training</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Verify entry 30 days after</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Before Boards</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Full audit with Training NCO</p>
                </div>
              </div>
            </section>
            <InfoCard icon={AlertTriangle} title="Time Matters" variant="warning">
              Correcting training record errors takes time. Start the process <strong>at least 60 days before</strong> a promotion board convenes to ensure corrections are reflected in time.
            </InfoCard>
          </div>
        ),
        actions: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What You Should Do</h2>
              <div className="mt-6 space-y-4">
                {ACTION_ITEMS.map((action, index) => (
                  <div key={action} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{action}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Personal Training File Checklist</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Maintain a personal folder (physical or digital) with copies of:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "All MarineNet course certificates (PDF downloads)",
                  "PME completion certificates (resident and non-resident)",
                  "Annual rifle/pistol qualification scorecards",
                  "PFT and CFT score sheets",
                  "MOS school diplomas and certificates",
                  "MCMAP belt certificates",
                  "Swim qualification documentation",
                  "Any COOL or civilian certification certificates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Pro Tip</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Take a screenshot of your MOL &quot;Personal Performance&quot; page before and after any training event. If something doesn&apos;t update correctly, you&apos;ll have proof of what was (or wasn&apos;t) recorded.
              </p>
            </section>
          </div>
        ),
        issues: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
              <div className="mt-4 space-y-4">
                {COMMON_ISSUES.map((item) => (
                  <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                    <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Escalation Path</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                If your Training NCO cannot resolve the issue:
              </p>
              <ol className="mt-4 space-y-2">
                {[
                  "Bring documentation to your S-3 (Training Officer)",
                  "Request formal correction through MCTIMS administrator",
                  "If still unresolved, contact HQMC Training Command",
                  "Document all attempts to correct the record",
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
            <InfoCard icon={AlertTriangle} title="Your Responsibility" variant="warning">
              While it&apos;s the unit&apos;s job to enter your training, it&apos;s <strong>your responsibility</strong> to verify accuracy. No one cares more about your record than you do. Don&apos;t assume everything is correct—verify it.
            </InfoCard>
          </div>
        ),
      }}
    />
  );
}
