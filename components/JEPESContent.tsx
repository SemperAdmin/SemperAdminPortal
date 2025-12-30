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
  { label: "Full Name", value: "Junior Enlisted Performance Evaluation System" },
  { label: "Applies To", value: "E-2 through E-5 promotions" },
  { label: "Authority", value: "MCO 1610.7A (Performance Evaluation System)" },
  { label: "System", value: "MCTFS/MOL" },
  { label: "Evaluation Period", value: "Continuous (at least annually)" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "four-pillars", label: "Four Pillars" },
  { id: "scoring", label: "Scoring" },
  { id: "command-input", label: "Command Input" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const FOUR_PILLARS = [
  { pillar: "Mission Performance", weight: "50%", description: "How well the Marine performs their job duties and contributes to unit mission" },
  { pillar: "Individual Character", weight: "25%", description: "Integrity, discipline, and adherence to Marine Corps values" },
  { pillar: "Warrior Skills", weight: "15%", description: "PFT, CFT, and rifle qualification scores" },
  { pillar: "PME Completion", weight: "10%", description: "Professional Military Education completion" },
];

const MISSION_PERFORMANCE_ELEMENTS = [
  "Job proficiency and technical knowledge",
  "Initiative and resourcefulness",
  "Accomplishment of assigned tasks",
  "Quality of work product",
  "Contribution to unit goals",
  "Ability to work with others",
  "Leadership of subordinates (if applicable)",
];

const CHARACTER_ELEMENTS = [
  "Integrity and honesty",
  "Military bearing and appearance",
  "Adherence to regulations",
  "Off-duty conduct",
  "Response to authority",
  "Self-discipline",
  "Moral courage",
];

const WARRIOR_SKILLS_BREAKDOWN = [
  { skill: "Physical Fitness Test (PFT)", points: "Up to 7%", notes: "Based on PFT class and score" },
  { skill: "Combat Fitness Test (CFT)", points: "Up to 5%", notes: "Based on CFT class and score" },
  { skill: "Rifle Qualification", points: "Up to 3%", notes: "Expert, Sharpshooter, or Marksman" },
];

const PME_COURSES = [
  { course: "Lance Corporal's Seminar", rank: "LCpl", points: "2.5%" },
  { course: "Corporal's Course", rank: "Cpl", points: "5%" },
  { course: "Career Course (Resident)", rank: "Cpl/Sgt", points: "7.5%" },
  { course: "Sergeant's Course", rank: "Sgt", points: "10%" },
];

const SCORING_RANGES = [
  { range: "1800-2100", interpretation: "Competitive for most MOS", recommendation: "Strong candidate for promotion" },
  { range: "1500-1799", interpretation: "Average", recommendation: "Improve warrior skills and seek leadership opportunities" },
  { range: "1200-1499", interpretation: "Below average", recommendation: "Focus on all improvement areas" },
  { range: "Below 1200", interpretation: "Not competitive", recommendation: "Significant improvement needed" },
];

export function JEPESContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Junior Enlisted Performance Evaluation System (JEPES)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            JEPES is the Marine Corps&apos; comprehensive evaluation and promotion system for junior enlisted Marines
            (E-2 through E-5). It replaced the legacy composite score system with a more holistic evaluation that
            weighs mission performance, individual character, warrior skills, and professional development.
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
            How JEPES Works
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Commanders and SNCOs evaluate Marines continuously",
              "Scores entered into MCTFS via MOL",
              "System calculates composite score based on four pillars",
              "Monthly cutting scores published by MOS",
              "Marines meeting cutting score are promoted",
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
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Why JEPES Matters</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            JEPES directly determines your competitiveness for promotion to Corporal and Sergeant.
            Understanding how each pillar is weighted helps you focus improvement efforts where
            they will have the greatest impact on your composite score.
          </p>
        </section>
      </div>
    ),

    "four-pillars": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The Four Pillars of JEPES
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Pillar</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Weight</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {FOUR_PILLARS.map((item) => (
                  <tr key={item.pillar} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.pillar}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.weight}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mission Performance (50%)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The largest component, reflecting the importance of job performance:
          </p>
          <ul className="mt-4 space-y-2">
            {MISSION_PERFORMANCE_ELEMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Individual Character (25%)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Character evaluation encompasses:
          </p>
          <ul className="mt-4 space-y-2">
            {CHARACTER_ELEMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Warrior Skills (15%)
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Skill</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Max Points</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {WARRIOR_SKILLS_BREAKDOWN.map((item) => (
                  <tr key={item.skill} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.skill}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.points}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Completion (10%)
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Rank</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Points</th>
                </tr>
              </thead>
              <tbody>
                {PME_COURSES.map((item) => (
                  <tr key={item.course} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.course}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.rank}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    scoring: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Understanding Your Score
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            JEPES scores are calculated automatically in MCTFS based on reported data. The maximum
            possible score is 2100 points. Scores are compared against monthly cutting scores by MOS.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Score Interpretation
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Score Range</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Interpretation</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {SCORING_RANGES.map((item) => (
                  <tr key={item.range} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.range}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.interpretation}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Cutting Scores
          </h3>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Cutting scores are published monthly via MARADMIN. They vary by MOS based on manning levels
              and promotion allocations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Open MOS</h4>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Cutting scores may be relatively low due to high promotion allocations.
                </p>
              </div>
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Closed MOS</h4>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Cutting scores may be high (even &quot;CLOSED&quot;) due to limited allocations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Score Verification
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Log into MOL and access JEPES portal",
              "Review each pillar score",
              "Verify PFT/CFT scores are current",
              "Check PME completion is recorded",
              "Ensure rifle qualification is current",
              "Report discrepancies to S-1 immediately",
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
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Score Discrepancies</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If you believe your score is incorrect, work with your S-1 to identify the source of the error.
            Common issues include missing PME, outdated PFT/CFT scores, or commander input not entered.
            Allow time for corrections before the next cutting score publication.
          </p>
        </section>
      </div>
    ),

    "command-input": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Commander&apos;s Input
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Command input is critical to JEPES scoring. Commanders and reporting seniors evaluate Marines
            on mission performance and individual character. This subjective evaluation accounts for 75%
            of the total score.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Evaluation Chain
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Immediate Supervisor</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Typically an NCO who provides initial assessment of daily performance
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reporting Senior</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                SNCO who reviews and endorses or modifies supervisor&apos;s assessment
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Commander</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Final authority who approves evaluation and enters into MCTFS
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When Evaluations Occur
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "At least annually for all Marines",
              "Upon transfer to new unit",
              "When supervisor or reporting senior changes",
              "Upon promotion or significant duty change",
              "Before selection board convening (if applicable)",
              "At commander's discretion for performance recognition",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Ensuring Fair Evaluation
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Marine&apos;s Role</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Keep supervisor informed of accomplishments</li>
                <li>• Maintain professional relationship</li>
                <li>• Document achievements</li>
                <li>• Request feedback regularly</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Command&apos;s Role</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Provide regular feedback</li>
                <li>• Evaluate fairly and consistently</li>
                <li>• Enter evaluations timely</li>
                <li>• Counsel on improvement areas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Appeals Process</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            If you believe an evaluation is unfair or inaccurate, you may request a review through your
            chain of command. Document specific concerns and provide evidence supporting your position.
            Formal appeals follow the performance evaluation appeal process.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            JEPES Score Verification
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Log into MOL JEPES portal",
              "Review overall composite score",
              "Verify mission performance rating",
              "Check individual character rating",
              "Confirm PFT score is current",
              "Confirm CFT score is current",
              "Verify rifle qualification current",
              "Check PME completion recorded",
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
            Maximizing Your Score
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Train for maximum PFT score",
              "Train for maximum CFT score",
              "Shoot Expert on rifle qualification",
              "Complete required PME early",
              "Complete optional PME for extra points",
              "Demonstrate leadership initiative",
              "Maintain exemplary conduct",
              "Document accomplishments for supervisor",
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
            If Score Seems Wrong
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Compare displayed score to your records",
              "Identify specific discrepancy",
              "Gather supporting documentation",
              "Contact S-1/Admin office",
              "Request correction in MCTFS",
              "Follow up to confirm correction",
              "Allow processing time before next publication",
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
