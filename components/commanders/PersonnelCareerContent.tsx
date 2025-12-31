"use client";

import { useState } from "react";
import { Acronym } from "../ui/Acronym";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Users,
  Award,
  RefreshCw,
  ClipboardList,
  Briefcase,
  AlertTriangle,
  CheckCircle,
  Info,
  ExternalLink,
} from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-zinc-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-[var(--sa-gold)]">{icon}</span>
          )}
          <span className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {title}
          </span>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-zinc-500" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-black/10 p-4 dark:border-white/10">
          {children}
        </div>
      )}
    </div>
  );
}

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "success" | "tip";
}

function InfoCard({ title, children, variant = "info" }: InfoCardProps) {
  const styles = {
    info: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
    warning: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20",
    success: "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/20",
    tip: "border-l-purple-500 bg-purple-50 dark:bg-purple-950/20",
  };

  const icons = {
    info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    success: <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    tip: <Info className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
  };

  return (
    <div className={`rounded-lg border-l-4 p-4 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        {icons[variant]}
        <div>
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</div>
          <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
        </div>
      </div>
    </div>
  );
}

function JEPESPillarCard({
  pillar,
  percentage,
  items,
}: {
  pillar: string;
  percentage: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {pillar}
        </div>
        <div className="rounded-full bg-[var(--sa-gold)]/20 px-2 py-1 text-xs font-bold text-[var(--sa-gold)]">
          {percentage}
        </div>
      </div>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function PersonnelCareerContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white">
        <h1 className="text-3xl font-bold">Personnel Administration and Career Management</h1>
        <p className="mt-2 text-lg text-zinc-200">
          Evaluation, promotion, retention, and administrative actions
        </p>
      </div>

      {/* Overview */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Overview
        </h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          As a commander, you directly shape the careers of Marines through your evaluation
          responsibilities, promotion and reenlistment decisions, and administrative actions. Your
          assessments determine who gets promoted, who gets retained, and who gets separated. These
          decisions have lasting impacts on individual Marines and on the quality of the force.
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          This page covers your responsibilities as a Reporting Senior and Reviewing Officer, your
          oversight of enlisted evaluations through <Acronym title="Junior Enlisted Performance Evaluation System">JEPES</Acronym>, your authority to recommend or not
          recommend for promotion and reenlistment, and your authority to issue administrative
          actions including Page 11 entries and 6105 counseling.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key References
          </h3>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            <li>• MCO 1610.7 (Performance Evaluation System)</li>
            <li>• MCO 1616.1 (Junior Enlisted Performance Evaluation System)</li>
            <li>• MCO P1400.32D (Enlisted Promotion Manual)</li>
            <li>• MCO 1040.31 (Enlisted Retention and Career Development)</li>
            <li>• MCO P1070.12K (Individual Records Administration Manual)</li>
            <li>• MCO 1900.16 (Separation and Retirement Manual)</li>
          </ul>
        </div>
      </div>

      {/* Fitness Report Responsibilities */}
      <CollapsibleSection
        title="Fitness Report Responsibilities"
        icon={<FileText className="h-5 w-5" />}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Officers and SNCOs (E-6 and above) are evaluated via fitness reports through the{" "}
            <Acronym title="Automated Performance Evaluation System">A-PES</Acronym> system.
          </p>

          {/* Reporting Senior Duties */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Reporting Senior (<Acronym title="Reporting Senior">RS</Acronym>) Duties
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              The Reporting Senior is the officer responsible for evaluating a Marine&apos;s
              performance and submitting the fitness report.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Observation and Assessment
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Observe the <Acronym title="Marine Reported On">MRO</Acronym> throughout the reporting period</li>
                  <li>Collect information from those who work directly with the MRO</li>
                  <li>Document observations and examples of performance</li>
                  <li>Assess against mission, duties, tasks, and standards</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Counseling Requirement
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Initial counseling within <strong>30 days</strong> of establishing relationship</li>
                  <li>Define billet description, role, responsibilities</li>
                  <li>Conduct counseling throughout the reporting period</li>
                  <li>Provide feedback before end of period</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Report Preparation
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Complete via <Acronym title="Automated Performance Evaluation System">A-PES</Acronym></li>
                  <li>Evaluate 14 dimensions of performance</li>
                  <li>Write comments that support marks assigned</li>
                  <li>Maintain your RS profile (history of marks given)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Timeliness
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit reports by the due date for each occasion</li>
                  <li>Annual reports follow rank-based schedules</li>
                  <li>Transfer reports due upon MRO&apos;s departure</li>
                  <li>Delinquent reports harm the MRO and reflect poorly on command</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviewing Officer Duties */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Reviewing Officer (<Acronym title="Reviewing Officer">RO</Acronym>) Duties
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              The Reviewing Officer provides quality control and an additional perspective on the
              fitness report.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Review Function
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Ensure the report is accurate and complete</li>
                  <li>Verify adherence to Marine Corps policy</li>
                  <li>Check that marks and comments are consistent</li>
                  <li>Ensure RS followed spirit and intent of <Acronym title="Performance Evaluation System">PES</Acronym></li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Concurrence
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Concur with RS assessment if accurate</li>
                  <li>Non-concur if report doesn&apos;t reflect policy or is inflated</li>
                  <li><strong>Cannot</strong> pressure RS to change marks</li>
                  <li>Document disagreement in RO comments if non-concurring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Adverse Fitness Reports */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Adverse Fitness Reports
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  When Required
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Relief for cause</li>
                  <li>Documented misconduct</li>
                  <li>Substandard performance</li>
                  <li>Legal issues (conviction, <Acronym title="Non-Judicial Punishment">NJP</Acronym> for serious offenses)</li>
                  <li>Drug offenses</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Requirements
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Review by commander with oversight responsibilities</li>
                  <li>Submission deadline: <strong>60 days</strong> from occasion date</li>
                  <li>MRO must receive counseling</li>
                  <li>MRO opportunity to submit matters</li>
                  <li>Document specific facts supporting adverse marks</li>
                </ul>
              </div>
            </div>

            <InfoCard title="What the Fitness Report Is NOT" variant="warning">
              <ul className="list-inside list-disc space-y-1">
                <li>A disciplinary tool</li>
                <li>A lever to exert influence</li>
                <li>A counseling document (it is the <em>culmination</em> of counseling)</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* JEPES */}
      <CollapsibleSection
        title="Junior Enlisted Performance Evaluation System (JEPES)"
        icon={<Users className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <InfoCard title="JEPES Replaced Pro/Con in November 2021" variant="info">
            <Acronym title="Junior Enlisted Performance Evaluation System">JEPES</Acronym> replaced the legacy Proficiency and Conduct marking system. Do not confuse old Pro/Con
            terminology with JEPES. Marines can track their own scores in real-time via{" "}
            <Acronym title="Marine Online">MOL</Acronym>.
          </InfoCard>

          {/* Commander Oversight */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Commander Oversight
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              The O-5 level commander or OIC equivalent serves as the <strong>Approver</strong> in
              JEPES for junior Marines (Private through Corporal).
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  The Approver Role
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Sets and approves final command input marks</li>
                  <li>Certifies the JEPES worksheet for inclusion in record</li>
                  <li>Ensures accuracy and fairness across the command</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Commander Responsibilities
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Promulgate MCO 1616.1 to subordinates</li>
                  <li>Ensure strict compliance with JEPES policy</li>
                  <li>Monitor for score inflation</li>
                  <li>Ensure evaluations completed by period end (31 Jan / 31 Jul)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Four Pillars */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              JEPES Four Pillars
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              The JEPES score is calculated from four equally-weighted pillars (25% each):
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <JEPESPillarCard
                pillar="1. Command Input"
                percentage="25%"
                items={[
                  "Individual Character (0.0-5.0)",
                  "MOS/Mission Accomplishment (0.0-5.0)",
                  "Leadership (0.0-5.0)",
                ]}
              />
              <JEPESPillarCard
                pillar="2. Warfighting"
                percentage="25%"
                items={["Rifle score percentile", "MCMAP belt"]}
              />
              <JEPESPillarCard
                pillar="3. Physical Toughness"
                percentage="25%"
                items={["PFT score percentile", "CFT score percentile"]}
              />
              <JEPESPillarCard
                pillar="4. Mental Agility"
                percentage="25%"
                items={["Formal PME completion", "Self-education (degrees, MCI, off-duty ed)"]}
              />
            </div>
          </div>

          {/* Command Input Marking */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Command Input Marking Guidance
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Marking Philosophy
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Average Marine should begin at <strong>2.5</strong> in all three categories</li>
                  <li>Exceptional marks (4.1 to 5.0) require justification comments</li>
                  <li>Only top 10-20% should be marked Exceptional</li>
                  <li>High marks require justification comment</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Preventing Inflation
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Use JEPES Command Input Evaluation Metrics for all marks</li>
                  <li>Design limits ability to unjustifiably inflate scores</li>
                  <li>Command input weighted equally with objective measures</li>
                  <li>Commander retains NOT REC authority regardless of PES score</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reporting Chain */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Reporting Chain Roles
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10">
                    <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      Role
                    </th>
                    <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      Responsibilities
                    </th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2 font-medium">First Line Supervisor (<Acronym title="First Line Supervisor">FLS</Acronym>)</td>
                    <td className="py-2">Validates objective scores, initiates corrective action, provides initial recommended marks</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2 font-medium">Evaluator</td>
                    <td className="py-2">Reviews FLS input, provides recommended marks based on direct observation</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2 font-medium">Senior Enlisted Reviewer (<Acronym title="Senior Enlisted Reviewer">SER</Acronym>)</td>
                    <td className="py-2">E-6 or above (SNCO). Reviews worksheets and command input marks for accuracy. Cannot submit draft marks.</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Approver (O-5 Commander)</td>
                    <td className="py-2">Sets and approves final command input marks. Certifies worksheet for inclusion in record.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InfoCard title="Reporting Occasions" variant="tip">
              <ul className="list-inside list-disc space-y-1">
                <li>Annual/Semi-annual: <strong>31 January</strong> and <strong>31 July</strong></li>
                <li>Transfer: Upon planned <Acronym title="Permanent Change of Station">PCS</Acronym></li>
                <li>Reporting chain can begin forwarding marks 45 days prior to end of period</li>
                <li>Occasions not approved by end of period are delinquent</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* Promotion Authority */}
      <CollapsibleSection
        title="Promotion Authority"
        icon={<Award className="h-5 w-5" />}
      >
        <div className="space-y-6">
          {/* NOT REC */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              NOT REC Authority
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              As commander, you have the authority to <strong>NOT RECOMMEND (NOT REC)</strong> a
              Marine for promotion regardless of their PES score or time in grade/service. This is a
              significant command authority.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  When to NOT REC
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Conduct or performance does not warrant promotion</li>
                  <li>Pending adverse administrative or legal action</li>
                  <li>Recent disciplinary issues</li>
                  <li>Character or integrity concerns</li>
                  <li>Not ready for increased responsibility</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Process
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>NOT REC must be documented</li>
                  <li>Marine should be counseled on reasons</li>
                  <li>Can be rescinded if conditions change</li>
                  <li>Submitted through <Acronym title="Marine Online">MOL</Acronym>/JEPES</li>
                </ul>
              </div>
            </div>

            <InfoCard title="NOT REC Does NOT" variant="info">
              <ul className="list-inside list-disc space-y-1">
                <li>Prevent Marine from competing in future months</li>
                <li>Permanently bar promotion</li>
                <li>Automatically result in administrative separation</li>
              </ul>
            </InfoCard>
          </div>

          {/* Meritorious Promotion */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Meritorious Promotion
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Commanders can recommend Marines for meritorious promotion ahead of peers for
              exceptional performance.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Authority
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Battalion/Squadron commanders and above</li>
                  <li>Within allocated quotas per grade</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Criteria
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Exceptional performance</li>
                  <li>Superior fitness</li>
                  <li>Outstanding potential</li>
                  <li>Immediate ability to assume duties of next grade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Reenlistment Authority */}
      <CollapsibleSection
        title="Reenlistment Authority"
        icon={<RefreshCw className="h-5 w-5" />}
      >
        <div className="space-y-6">
          {/* Approval */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Reenlistment Approval
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              As commander, you can approve or disapprove reenlistment requests based on the
              Marine&apos;s performance, conduct, and the needs of the Marine Corps.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Approval Authority
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Company commanders can approve routine reenlistments</li>
                  <li>Certain waivers require higher authority</li>
                  <li>Some MOSs have restricted reenlistment (check current MARADMIN)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Factors to Consider
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Performance record (fitness reports, JEPES scores)</li>
                  <li>Conduct record (<Acronym title="Non-Judicial Punishment">NJP</Acronym>, Page 11 entries, 6105 counseling)</li>
                  <li>Physical fitness (<Acronym title="Physical Fitness Test">PFT</Acronym>/<Acronym title="Combat Fitness Test">CFT</Acronym> scores, weight standards)</li>
                  <li>Professional development (<Acronym title="Professional Military Education">PME</Acronym> completion)</li>
                  <li><Acronym title="Military Occupational Specialty">MOS</Acronym> needs (overage vs shortage)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Denial */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Reenlistment Denial
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Reasons for Denial
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Substandard performance</li>
                  <li>Disciplinary issues</li>
                  <li>Failure to meet standards (fitness, weight, PME)</li>
                  <li>Pattern of misconduct</li>
                  <li>Not in the best interest of the Marine Corps</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Process for Denial
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Counsel Marine on reasons for denial</li>
                  <li>Document in writing</li>
                  <li>Marine can submit rebuttal</li>
                  <li>Decision can be appealed through chain of command</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Administrative Actions */}
      <CollapsibleSection
        title="Administrative Actions"
        icon={<ClipboardList className="h-5 w-5" />}
      >
        <div className="space-y-6">
          {/* Page 11 Entries */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Page 11 Entries
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Page 11 is the administrative remarks section in a Marine&apos;s Service Record
              Book/Official Military Personnel File. Commanders use Page 11 entries to formally
              document significant information.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
                <div className="font-semibold text-rose-700 dark:text-rose-400">
                  Adverse Page 11
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Documents misconduct or substandard performance</li>
                  <li>Becomes part of permanent record</li>
                  <li>Affects reenlistment, promotion, career progression</li>
                  <li>Marine must be given opportunity to rebut</li>
                </ul>
              </div>
              <div className="rounded-lg border-l-4 border-l-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
                <div className="font-semibold text-blue-700 dark:text-blue-400">
                  Routine Page 11
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Documents administrative matters</li>
                  <li>Not adverse in nature</li>
                  <li>Examples: Policy acknowledgments, waivers</li>
                  <li>Motorcycle safety acknowledgment, weapon registration</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Required Elements for Adverse Page 11
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Identification of conduct or performance deficiency</li>
                <li>Specific facts and dates</li>
                <li>Marine&apos;s signature (or notation of refusal)</li>
                <li>Commander&apos;s signature</li>
                <li>Opportunity for Marine to submit rebuttal statement</li>
              </ul>
            </div>
          </div>

          {/* 6105 Counseling */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              6105 Counseling Entries
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              6105 counseling (from paragraph 6105 of MCO 1900.16) is a specific type of adverse
              Page 11 entry that formally notifies a Marine of deficiencies and potential for
              administrative separation.
            </p>

            <InfoCard title="Key Point: Separation Basis" variant="warning">
              After receiving <strong>one 6105 entry</strong>, a Marine can be processed for
              administrative separation if misconduct continues. This is the &quot;leverage&quot;
              the 6105 provides.
            </InfoCard>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Purpose
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Written notification of specific deficiency</li>
                  <li>First step in counseling and rehabilitation process</li>
                  <li>Provides documented basis for future separation if behavior continues</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  When to Use 6105
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Pattern of minor misconduct</li>
                  <li>Single instance of significant misconduct (less than NJP-worthy)</li>
                  <li>Performance deficiencies not improving after informal counseling</li>
                  <li>Behavior that could lead to separation if not corrected</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Required Elements
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Written notification of specific deficiency</li>
                <li>Specific recommendations for corrective action</li>
                <li>Sources of further assistance</li>
                <li>Comprehensive explanation of consequences if Marine fails to correct</li>
                <li>Reasonable opportunity for Marine to undertake corrective action</li>
                <li>Marine&apos;s signature acknowledging receipt (or notation of refusal)</li>
                <li>Commander&apos;s signature and date</li>
                <li>Notation of Marine&apos;s right to submit rebuttal</li>
              </ul>
            </div>
          </div>

          {/* Letters */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Letters of Caution, Admonition, and Reprimand
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border-l-4 border-l-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-950/20">
                <div className="font-semibold text-emerald-700 dark:text-emerald-400">
                  Non-Punitive Letter of Caution (<Acronym title="Non-Punitive Letter of Caution">NPLOC</Acronym>)
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Least severe</li>
                  <li>Does not become part of official record</li>
                  <li>Personal matter between Marine and issuer</li>
                  <li>Can be issued by any leader (including NCOs)</li>
                </ul>
              </div>
              <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4 dark:bg-amber-950/20">
                <div className="font-semibold text-amber-700 dark:text-amber-400">
                  Letter of Admonition
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>More severe than NPLOC</li>
                  <li>Can become part of official record</li>
                  <li>Issued by commander</li>
                  <li>Documents specific deficiency and expected correction</li>
                </ul>
              </div>
              <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
                <div className="font-semibold text-rose-700 dark:text-rose-400">
                  Letter of Reprimand
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Most severe</li>
                  <li>Becomes part of official record</li>
                  <li>Issued by commander</li>
                  <li>Can be basis for adverse fitness report</li>
                  <li>Significantly impacts career</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Transition Readiness Program */}
      <CollapsibleSection
        title="Transition Readiness Program Oversight"
        icon={<Briefcase className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Responsibilities
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Ensure all separating/retiring Marines complete <Acronym title="Transition Readiness Seminar">TRS</Acronym> requirements</li>
                <li>Verify capstone completion before separation</li>
                <li>Monitor Marines&apos; transition progress</li>
                <li>Provide time for transition activities</li>
                <li>Sign off on completed transition checklist</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Timeline Requirements
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Pre-separation counseling: <strong>365 days</strong> before <Acronym title="End of Active Service">EAS</Acronym></li>
                <li>Core curriculum completion: Before final leave</li>
                <li>Capstone: Within <strong>90 days</strong> of separation</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Exceptions" variant="tip">
            Operational requirements may delay (but not excuse) TRS. Waivers require{" "}
            <Acronym title="General Court-Martial Convening Authority">GCMCA</Acronym> approval. Document any delays or modifications.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Important Things to Know
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <InfoCard title="Fitness Reports" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Primary tool for promotion, retention, schooling, command, and duty assignments</li>
              <li>Inflationary marking dilutes value of all reports</li>
              <li>Your RS profile follows you throughout your career</li>
              <li>Relative Value (RV), not FRA, is what boards brief and use</li>
            </ul>
          </InfoCard>

          <InfoCard title="JEPES" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Replaced legacy Pro/Con system in November 2021</li>
              <li>Emphasizes transparency, accessibility, and accuracy</li>
              <li>Command input is only 25% of the total PES score</li>
              <li>Marines can track their own scores in real-time via MOL</li>
            </ul>
          </InfoCard>

          <InfoCard title="Administrative Actions" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>A single 6105 can be basis for separation if subsequent misconduct occurs</li>
              <li>Page 11 alone cannot be grounds for separation unless multiple incidents</li>
              <li>Marine always has right to rebut adverse entries</li>
              <li>Consider the career impact of each entry carefully</li>
            </ul>
          </InfoCard>

          <InfoCard title="Record Keeping" variant="tip">
            <ul className="list-inside list-disc space-y-1">
              <li>All administrative actions must be properly documented</li>
              <li>Missing documentation can void adverse actions</li>
              <li>Maintain copies of all counseling and administrative entries</li>
              <li>Ensure timely upload to Marine&apos;s record</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Special Situations */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Special Situations
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Contracting Officers
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Operate in two chains of command (uniformed and contracting)</li>
              <li>RS must be another Contracting Officer</li>
              <li>RO can be unit CO/XO</li>
              <li>Affects normal RS/RO relationship</li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <Acronym title="Temporary Additional Duty">TAD</Acronym> Marines
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Continue to be evaluated by parent command RS</li>
              <li>TAD command can provide input to parent command RS</li>
              <li>Establish clear communication about evaluation responsibilities</li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Marines with <Acronym title="Post-Traumatic Stress Disorder">PTSD</Acronym>/<Acronym title="Traumatic Brain Injury">TBI</Acronym>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Additional protections exist for administrative separations</li>
              <li>Mental health professional must assess if condition contributed to misconduct</li>
              <li><Acronym title="General Court-Martial Convening Authority">GCMCA</Acronym> is always separation authority</li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Reserve Component Marines
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>JEPES and fitness reports apply when in duty status</li>
              <li>Coordinate evaluation responsibilities between parent unit and supported command</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Problems and Solutions */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Common Problems and Solutions
        </h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: RS profile is getting skewed by inflated marks
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Review your marking patterns. Use the full range of marks.
              Reserve highest marks for truly exceptional performers. Seek guidance from your RO on
              calibration.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Fitness report is late
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Identify cause of delay. Use exception codes if authorized.
              Submit as soon as possible with explanation. Late reports harm the MRO&apos;s record
              and reflect on you.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: MRO disagrees with fitness report marks
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> MRO can submit a statement. Consider the feedback but mark
              based on your observations. Do not change marks due to pressure unless warranted by
              facts.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: JEPES scores seem inflated across the command
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Review command input marking philosophy. Retrain evaluators
              on JEPES Command Input Evaluation Metrics. Use 2.5 as baseline for average Marines.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Uncertainty about when to use Page 11 vs 6105 vs NJP
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Page 11 documents events and counseling. 6105 specifically
              warns of separation potential. NJP imposes punishment. Consider severity, pattern of
              behavior, and desired outcome.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Marine refuses to sign Page 11 entry
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Note refusal on the document with witness signature. The
              entry is still valid. Marine&apos;s refusal to sign does not invalidate the entry.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Need to NOT REC a Marine for promotion
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Counsel Marine on reasons. Document in JEPES. NOT REC can
              be rescinded if Marine demonstrates improvement. This is a command authority—use it
              when warranted.
            </div>
          </div>
        </div>
      </div>

      {/* Key Links */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Key Links
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://www.marines.mil/News/Publications/MCPEL/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">MCO 1610.7 (PES Manual)</span>
          </a>
          <a
            href="https://www.marines.mil/News/Publications/MCPEL/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">MCO 1616.1 (JEPES)</span>
          </a>
          <a
            href="https://a-pes.mmrp.usmc.mil/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">A-PES System</span>
          </a>
          <a
            href="https://mol.tfs.usmc.mil/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Marine Online (MOL)</span>
          </a>
          <a
            href="https://www.marines.mil/News/Publications/MCPEL/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">MCO P1400.32D (Promotion)</span>
          </a>
          <a
            href="https://www.marines.mil/News/Publications/MCPEL/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">MCO P1070.12K (IRAM)</span>
          </a>
          <a
            href="https://www.manpower.usmc.mil/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Manpower (MMRP-30)</span>
          </a>
          <a
            href="https://www.manpower.marines.mil/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Stay Marine</span>
          </a>
        </div>
      </div>
    </div>
  );
}
