"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCOLink, KeyPoint } from "./ui/MCOLink";
import { MCO_URLS } from "@/data/references";


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

const KEY_POINTS: KeyPoint[] = [
  { label: "Tracking System", value: "MCTFS and Joint Services Transcript (JST)" },
  { label: "Benefits", value: "Tuition Assistance, GI Bill, Credentialing" },
  { label: "TA Authority", value: "MCO 1560.25", url: MCO_URLS.TUITION_ASSISTANCE },
  { label: "Degree Verification", value: "Official transcripts required" },
  { label: "Access", value: "MOL and JST Portal" },
  { label: "Promotion Impact", value: "Education points for enlisted Marines" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Education Benefits" },
  { id: "tracking", label: "Record Tracking" },
  { id: "updates", label: "Updating Records" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const EDUCATION_BENEFITS = [
  { benefit: "Tuition Assistance (TA)", description: "Up to $250/semester hour, $4,500/year for active duty", eligibility: "Active duty Marines" },
  { benefit: "Post-9/11 GI Bill", description: "Full tuition, BAH, books after EAS", eligibility: "90+ days active service after 9/10/01" },
  { benefit: "Montgomery GI Bill", description: "Monthly stipend for education", eligibility: "Paid into MGIB program" },
  { benefit: "COOL Program", description: "Credentialing exam funding", eligibility: "All Marines" },
  { benefit: "CLEP/DSST", description: "Free college credit exams", eligibility: "All Marines" },
  { benefit: "Scholarship Programs", description: "Various USMC scholarships", eligibility: "Varies by program" },
];

const JST_CONTENTS = [
  "Basic Training/Recruit Training",
  "MOS Schools completed",
  "PME courses completed",
  "Leadership courses",
  "Specialized training with ACE credit",
  "American Council on Education (ACE) recommendations",
];

const EDUCATION_LEVELS = [
  { code: "HS", description: "High School Diploma/GED", points: "0" },
  { code: "SC", description: "Some College (no degree)", points: "0" },
  { code: "AA", description: "Associate Degree", points: "20" },
  { code: "BA", description: "Bachelor's Degree", points: "75" },
  { code: "MA", description: "Master's Degree", points: "100" },
  { code: "PHD", description: "Doctorate", points: "100" },
];

const UPDATE_PROCESS = [
  { step: "Obtain official transcripts", details: "From accredited institution, sealed" },
  { step: "Submit to Education Office/S-1", details: "With degree completion letter if applicable" },
  { step: "Education verification", details: "Office verifies accreditation and degree" },
  { step: "Unit Diary entry", details: "Education level updated in MCTFS" },
  { step: "Verify MOL update", details: "Check education code on record" },
];

const COMMON_ISSUES = [
  { issue: "Transcripts not official", solution: "Request sealed official transcripts from registrar" },
  { issue: "School not accredited", solution: "Verify regional accreditation status" },
  { issue: "Wrong education code", solution: "Submit correction request with documentation" },
  { issue: "Missing CLEP/DSST credit", solution: "Verify transcript receipt by school" },
  { issue: "JST not reflecting training", solution: "Allow 30 days, then contact schoolhouse" },
];

const TA_REQUIREMENTS = [
  "Approved degree plan on file",
  "Course supports degree program",
  "Maintain 2.0 GPA minimum",
  "Complete courses or repay",
  "Two years TIS recommended",
  "Command approval required",
];

export function EducationRecordsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Education Records Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Education records document a Marine&apos;s academic achievements, including civilian education,
            military training credits, and professional certifications. Accurate education records affect
            promotion eligibility (composite score points for enlisted), career opportunities, and access
            to education benefits. Marines should maintain and update their education records throughout
            their career.
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
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.url ? <MCOLink mco={point.value} url={point.url} /> : point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Education Code and Composite Score
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Code</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Promotion Points</th>
                </tr>
              </thead>
              <tbody>
                {EDUCATION_LEVELS.map((row) => (
                  <tr key={row.code} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.code}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{row.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Career Impact</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Education points contribute to promotion composite scores for enlisted Marines. Officers
            are expected to pursue advanced degrees. A bachelor&apos;s degree provides 75 points; a
            master&apos;s provides 100 points (maximum). Update your education record as soon as you
            complete a degree to ensure points are calculated.
          </p>
        </section>
      </div>
    ),

    benefits: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Education Benefits Overview
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Benefit</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {EDUCATION_BENEFITS.map((row) => (
                  <tr key={row.benefit} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.benefit}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{row.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tuition Assistance Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {TA_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Joint Services Transcript (JST)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The JST documents military training in a format recognized by civilian colleges:
          </p>
          <ul className="mt-4 space-y-2">
            {JST_CONTENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-red)] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CLEP/DSST Testing
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">CLEP</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• College-Level Examination Program</li>
                <li>• 34 subject exams available</li>
                <li>• Free for active duty</li>
                <li>• 3-12 credit hours per exam</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">DSST</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• DANTES Subject Standardized Tests</li>
                <li>• Upper and lower division credit</li>
                <li>• Business and technical subjects</li>
                <li>• Free for active duty</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">GI Bill Tip</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Post-9/11 GI Bill benefits can be transferred to dependents after 6 years of service with
            a 4-year commitment. Consider using TA while on active duty and saving GI Bill for post-service
            education or transferring to dependents.
          </p>
        </section>
      </div>
    ),

    tracking: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Where Education Is Tracked
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MCTFS (BIR)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Education level code</li>
                <li>• Degree completion date</li>
                <li>• Used for promotion calculations</li>
                <li>• Visible on MOL</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Joint Services Transcript</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Military training credits</li>
                <li>• ACE recommendations</li>
                <li>• Sent to civilian schools</li>
                <li>• Access via jst.doded.mil</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SRB/OQR Education Section
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The service record book contains:
          </p>
          <ul className="mt-4 space-y-1 list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Official transcripts (document side)</li>
            <li>Degree completion certificates</li>
            <li>Professional certifications</li>
            <li>CLEP/DSST score reports</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verifying Your Education Record
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Log into MOL",
              "View your BIR (Basic Information Record)",
              "Check education code field",
              "Verify degree and date are correct",
              "Request JST to see training credits",
              "Report discrepancies to S-1",
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

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Regular Review</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Review your education record at least annually and after completing any degree or significant
            coursework. Ensure updates are processed before promotion board convening dates to maximize
            composite score points.
          </p>
        </section>
      </div>
    ),

    updates: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Education Record Update Process
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Step</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Details</th>
                </tr>
              </thead>
              <tbody>
                {UPDATE_PROCESS.map((row) => (
                  <tr key={row.step} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.step}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documentation
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Degree Completion</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Official sealed transcript</li>
                <li>• Degree completion letter</li>
                <li>• Copy of diploma (optional)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Coursework Only</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Official transcript</li>
                <li>• Statement showing credits completed</li>
                <li>• Does not change education code</li>
              </ul>
            </div>
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
            Accreditation Requirements
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Only degrees from regionally accredited institutions are recognized:
          </p>
          <ul className="mt-4 space-y-1 list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Middle States Commission on Higher Education</li>
            <li>New England Commission of Higher Education</li>
            <li>Higher Learning Commission</li>
            <li>Northwest Commission on Colleges and Universities</li>
            <li>Southern Association of Colleges and Schools</li>
            <li>WASC Senior College and University Commission</li>
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Timeline</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Allow 30-60 days for education record updates to be processed. Submit degree documentation
            well in advance of promotion board convening dates. Electronic transcripts may process
            faster than mailed copies.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Degree Completion Update
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Obtain official sealed transcript",
              "Get degree completion letter",
              "Verify school is regionally accredited",
              "Submit to Education Office/S-1",
              "Retain copy for personal records",
              "Track processing status",
              "Verify MOL update (30-60 days)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            JST Review
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Access JST at jst.doded.mil",
              "Review military training credits",
              "Verify all schools are listed",
              "Request official transcript for schools",
              "Report missing training to S-3",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TA Request
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Establish degree plan with Education Office",
              "Verify course supports degree plan",
              "Obtain command approval",
              "Submit TA request via GoArmyEd/Navy portal",
              "Register for class after TA approval",
              "Complete course successfully",
              "Verify grade posted to transcript",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Annual Education Review
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Check MOL education code",
              "Compare to actual education level",
              "Review JST for training credits",
              "Update SRB/OQR with new transcripts",
              "Submit corrections if needed",
              "Plan next educational goal",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
