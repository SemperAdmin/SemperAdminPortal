"use client";

import { useState } from "react";
import { Acronym } from "../ui/Acronym";
import { CLIMATE_URLS, SAFETY_URLS, FAMILY_URLS } from "../../data/references";
import {
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Users,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  ExternalLink,
  Calendar,
  GraduationCap,
  Clock,
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

interface TimelineItemProps {
  days: string;
  title: string;
  items: string[];
  reference?: string;
}

function TimelineItem({ days, title, items, reference }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-6 last:pb-0">
      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">
        <Clock className="h-3 w-3" />
      </div>
      <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-[var(--sa-gold)]/30 last:hidden" />
      <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[var(--sa-navy)] px-2 py-0.5 text-xs font-bold text-white">
            {days}
          </span>
          <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {title}
          </span>
        </div>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {reference && (
          <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            Reference: {reference}
          </div>
        )}
      </div>
    </div>
  );
}

export function CommandClimateContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white">
        <h1 className="text-3xl font-bold">Command Climate and Culture Programs</h1>
        <p className="mt-2 text-lg text-zinc-200">
          Building and maintaining a positive command environment
        </p>
      </div>

      {/* Overview */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Overview
        </h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Command climate reflects how Marines perceive their unit, leadership, policies, and
          overall environment. As a commander, you shape this climate through your actions, words,
          and the programs you establish. A positive command climate yields trust, pride,
          commitment, and mission accomplishment. A negative climate creates mistrust, low
          motivation, and discipline problems.
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          You must establish specific programs and policies to assess, maintain, and improve your
          command climate. These include conducting climate surveys, publishing required policy
          statements, and ensuring your command team is trained on their roles.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key References
          </h3>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            <li>• MCO P5354.1E (<Acronym title="Prohibited Activities and Conduct">PAC</Acronym> Prevention and Response Policy)</li>
            <li>• MARADMIN 291/19 (<Acronym title="Defense Equal Opportunity Climate Survey">DEOCS</Acronym> Requirements)</li>
            <li>• MCO 1752.5C (<Acronym title="Sexual Assault Prevention and Response">SAPR</Acronym> Program)</li>
            <li>• MCO 1754.9B (Unit, Personal and Family Readiness Program)</li>
            <li>• MCO 5100.29C (Safety Program)</li>
          </ul>
        </div>
      </div>

      {/* DEOCS Section */}
      <CollapsibleSection
        title="Defense Equal Opportunity Climate Survey (DEOCS)"
        icon={<ClipboardCheck className="h-5 w-5" />}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <Acronym title="Defense Equal Opportunity Climate Survey">DEOCS</Acronym> is a standardized survey tool that measures the climate of a command through
            anonymous feedback from personnel. It assesses perceptions of equal opportunity,
            organizational effectiveness, and leadership.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                When to Conduct DEOCS
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Within <strong>90 days prior</strong> to relinquishing command</li>
                <li>Annually thereafter</li>
                <li>May be conducted more frequently at commander discretion</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                How to Initiate
              </div>
              <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Contact the installation Equal Opportunity Advisor (<Acronym title="Equal Opportunity Advisor">EOA</Acronym>)</li>
                <li>Request DEOCS through <Acronym title="Defense Equal Opportunity Management Institute">DEOMI</Acronym></li>
                <li>Allow 14-21 days for survey administration</li>
                <li>Receive results report within 30 days of survey close</li>
              </ol>
            </div>
          </div>

          <InfoCard title="Key Point: Outgoing Commander Initiates" variant="tip">
            The outgoing commander initiates DEOCS so the incoming commander has a baseline. You
            inherit your predecessor&apos;s climate data.
          </InfoCard>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Using DEOCS Results
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Brief results to your command (Marines should see you heard them)</li>
              <li>Identify problem areas requiring attention</li>
              <li>Develop action plans for areas of concern</li>
              <li>Use results to inform command decisions</li>
              <li>Maintain confidentiality of individual responses</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Climate Surveys Beyond DEOCS */}
      <CollapsibleSection
        title="Command Climate Surveys (Beyond DEOCS)"
        icon={<ClipboardCheck className="h-5 w-5" />}
      >
        <div className="space-y-6">
          {/* Aviation Units */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Aviation Units (per MCO 5100.29C)
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Within 30 days of change of command and annually thereafter:
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  <Acronym title="Command Safety Assessment">CSA</Acronym>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Aircrew safety perspectives
                </div>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  <Acronym title="Maintenance Climate Assessment Survey">MCAS</Acronym>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Maintainer feedback
                </div>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  <Acronym title="Administrative Support Personnel Assessment">ASPA</Acronym>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  S-shop personnel feedback
                </div>
              </div>
            </div>
          </div>

          {/* Safety Climate Survey */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Safety Climate Survey (O-5/O-6 Commands)
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Required within <strong>90 days</strong> of assuming command</li>
              <li>Required annually thereafter</li>
              <li>Establishes baseline for new commander</li>
              <li>Assess perceptions of safety culture and leadership commitment</li>
            </ul>
          </div>

          {/* Recommended Surveys */}
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Recommended Additional Surveys
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Equal Opportunity Survey (can be tailored with specific questions)</li>
              <li>Command Culture Workshop (6-12 months after assuming command)</li>
              <li>Targeted sensing sessions on specific issues</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Required Policy Statements */}
      <CollapsibleSection
        title="Required Policy Statements"
        icon={<FileText className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Policy statements must be published within specific timelines after assuming command.
            These establish your command standards and fulfill regulatory requirements.
          </p>

          <div className="space-y-4">
            <TimelineItem
              days="30 Days"
              title="Initial Policy Statements"
              items={[
                "Safety Policy Statement - Command expectations for safety, prominently posted",
                "Insider Threat Program Policy - Detection and reporting procedures",
              ]}
              reference="MCO 5100.29C, SECNAVINST 5510.37A"
            />

            <TimelineItem
              days="60 Days"
              title="Program-Specific Policies"
              items={[
                "SAPR Policy Statement - Support SAPR program objectives",
                "UPFRP Standard Operating Procedure - Roles and responsibilities for family readiness",
                "Command Philosophy/Guidance (Recommended) - Vision, priorities, and expectations",
              ]}
              reference="MCO 1752.5C, MCO 1754.9B"
            />

            <TimelineItem
              days="90 Days"
              title="Conduct & Posting Requirements"
              items={[
                "Prohibited Activities and Conduct (PAC) Policy - Published and prominently posted",
                "SAPR Policy Statement (Posting) - Posted in common and high traffic areas",
              ]}
              reference="MCO P5354.1E, MCO 1752.5C"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* PAC Program */}
      <CollapsibleSection
        title="Prohibited Activities and Conduct (PAC) Program"
        icon={<Shield className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Discrimination Based On
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Race</li>
                <li>Color</li>
                <li>National origin</li>
                <li>Religion</li>
                <li>Sex (including pregnancy)</li>
                <li>Gender identity</li>
                <li>Sexual orientation</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Other Prohibited Conduct
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Sexual harassment</li>
                <li>Hazing</li>
                <li>Bullying</li>
                <li>Retaliation against those who report misconduct or participate in investigations</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Commander Responsibilities
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Policy
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Publish command policy within 90 days</li>
                  <li>Ensure policy is prominently posted</li>
                  <li>Update policy as regulations change</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Training
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Ensure all personnel receive annual PAC training</li>
                  <li>Training covers recognition, prevention, and reporting</li>
                  <li>Document training completion</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Response
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Promptly investigate all allegations</li>
                  <li>Take appropriate action when misconduct is substantiated</li>
                  <li>Protect complainants and witnesses from retaliation</li>
                  <li>Report substantiated cases as required</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Climate
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Maintain climate where reporting is encouraged</li>
                  <li>Lead by example in respectful treatment</li>
                  <li>Address inappropriate comments or behaviors immediately</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Command Team Training */}
      <CollapsibleSection
        title="Command Team Training"
        icon={<GraduationCap className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <InfoCard title="Timeline: Within 30 Days of Assuming Command" variant="info">
            Family Readiness Officer coordinates through Marine Corps Family Team Building
            (<Acronym title="Marine Corps Family Team Building">MCFTB</Acronym>).
          </InfoCard>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Required Attendees (per MCO 1754.9B)
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Commanding Officer</li>
                <li>Executive Officer</li>
                <li>Sergeant Major/Senior Enlisted Leader</li>
                <li>Chaplain</li>
                <li>Family Readiness Officer (<Acronym title="Family Readiness Officer">FRO</Acronym>)</li>
                <li>Single Marine Representative</li>
                <li>CO/Senior Enlisted spouse</li>
                <li>Command Team Advisor</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Training Content
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Family readiness program requirements</li>
                <li>Resources available to command</li>
                <li>Roles and responsibilities of each team member</li>
                <li>Communication strategies</li>
                <li>Deployment support procedures</li>
                <li>Crisis response protocols</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Additional Required Training
            </h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[var(--sa-gold)]" />
                  <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Child Abuse and Domestic Abuse Prevention and Response
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    90 Days
                  </span>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Covers recognition, reporting, and response procedures. Reference: MCO 1754.11
                </div>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[var(--sa-gold)]" />
                  <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    <Acronym title="Sexual Assault Prevention and Response">SAPR</Acronym> Resource Brief
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    30 Days
                  </span>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Contact installation <Acronym title="Sexual Assault Response Coordinator">SARC</Acronym> within 30 days. Covers SAPR resources and commander
                  responsibilities. Reference: MCO 1752.5C
                </div>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[var(--sa-gold)]" />
                  <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Fund Control Personnel Training
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    2 Weeks
                  </span>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Appropriations Law (refresh within 3 years), DON Budget Execution (once in
                  career). Reference: SECNAVINST 7000.27D
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Important Things to Know
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <InfoCard title="Climate vs Culture" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Climate:</strong> How Marines currently feel (changes quickly)</li>
              <li><strong>Culture:</strong> Deeper, ingrained beliefs (changes slowly)</li>
              <li>Surveys measure climate; sustained leadership shapes culture</li>
              <li>You can impact climate immediately; culture takes longer</li>
            </ul>
          </InfoCard>

          <InfoCard title="Survey Best Practices" variant="tip">
            <ul className="list-inside list-disc space-y-1">
              <li>Brief results back to the command</li>
              <li>Take visible action on identified issues</li>
              <li>Use first survey for baseline, second to measure progress</li>
              <li>Do not attempt to identify individual respondents</li>
            </ul>
          </InfoCard>

          <InfoCard title="Hazing Warning Signs" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Informal initiation rituals</li>
              <li>Physical or psychological abuse disguised as training</li>
              <li>Pressure to participate in drinking or risky behaviors</li>
              <li>&quot;That&apos;s just how we&apos;ve always done it&quot; mentality</li>
            </ul>
          </InfoCard>

          <InfoCard title="Retaliation Prevention" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Monitor personnel actions affecting complainants</li>
              <li>Create multiple reporting channels (chain, IG, EO, chaplain)</li>
              <li>Follow up with complainants after investigations</li>
              <li>Take visible action against substantiated retaliation</li>
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
              Geographically Dispersed Units
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Conduct separate surveys for each location if population warrants</li>
              <li>Ensure policy statements reach all locations</li>
              <li>Consider video or teleconference for command team training</li>
              <li>Designate local POCs for climate issues</li>
              <li>Visit remote sites to personally assess climate</li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Reserve Units
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>DEOCS administration during drill weekends</li>
              <li>Policy statements must be visible during drill periods</li>
              <li>Training requirements apply during duty status</li>
              <li>Coordinate with I-I staff on implementation</li>
              <li>Consider unique stressors of reserve service</li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Aviation Commands
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Additional safety climate surveys required (CSA, MCAS, ASPA)</li>
              <li>Coordinate with <Acronym title="Marine Aircraft Group">MAG</Acronym>/Wing safety officers</li>
              <li>Maintenance climate receives special attention</li>
              <li>Night crew climate often differs from day crew</li>
              <li>Flight line culture requires specific attention</li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Joint or Combined Commands
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Marine Corps policies apply to Marines regardless of command structure</li>
              <li>Coordinate with joint chain on survey administration</li>
              <li>Maintain separate Marine Corps reporting requirements</li>
              <li>Ensure Marines know which policies apply to them</li>
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
              Problem: Low survey participation rates
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Emphasize confidentiality. Provide protected time for
              completion. Explain how results will be used. Leadership should encourage
              participation without making it feel coercive. Ensure Marines have CAC access.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Survey results reveal significant climate problems
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Acknowledge issues openly. Develop specific action plans.
              Communicate actions to the command. Follow up with targeted surveys or sensing
              sessions. Consider requesting assistance from installation EO office or chaplain.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Marines reluctant to report hazing or harassment
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Establish multiple reporting channels (chain of command,
              IG, EO, chaplain). Protect reporter identity when possible. Take visible action
              against substantiated offenses. Follow up with reporters to ensure no retaliation.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Policy statements are published but Marines do not know them
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Brief policies at formations. Post in high-traffic areas.
              Include in check-in procedures. Reference in counseling sessions. Quiz Marines on key
              policy points. Incorporate into <Acronym title="Professional Military Education">PME</Acronym>.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Command team members have not attended training
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Prioritize scheduling immediately. If training not
              available locally, request mobile training team. Document all training completion. Use
              interim period to brief team on basic responsibilities.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Inherited poor climate from predecessor
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Use DEOCS baseline to identify specific issues. Communicate
              your standards clearly. Take visible early actions to demonstrate change. Be
              patient—culture change takes time. Document your efforts.
            </div>
          </div>
        </div>
      </div>

      {/* Key Links */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Key Links
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={CLIMATE_URLS.DEOMI}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              <Acronym title="Defense Equal Opportunity Management Institute">DEOMI</Acronym>
            </span>
          </a>
          <a
            href={CLIMATE_URLS.IGMC}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> Functional Area Checklists
            </span>
          </a>
          <a
            href={SAFETY_URLS.SAFETY_MARINES}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Marine Corps Safety Center</span>
          </a>
          <a
            href={CLIMATE_URLS.MCPEL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">MCO P5354.1E (PAC Policy)</span>
          </a>
          <a
            href={FAMILY_URLS.MCFTB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              Marine Corps Family Team Building
            </span>
          </a>
          <div className="flex items-center gap-2 rounded-lg border border-black/10 p-3 dark:border-white/10">
            <Users className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              Equal Opportunity Program: Contact installation <Acronym title="Equal Opportunity Advisor">EOA</Acronym>
            </span>
          </div>
        </div>
      </div>

      {/* Foundational Note */}
      <InfoCard title="Command Climate: The Foundation" variant="success">
        Command climate programs create the environment for all other commander programs to succeed.
        A positive climate enables effective discipline, readiness, safety, and retention. This is
        foundational to command effectiveness.
      </InfoCard>
    </div>
  );
}
