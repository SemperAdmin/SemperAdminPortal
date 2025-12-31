"use client";

import React, { useState } from "react";
import { Breadcrumb } from "../ui/Breadcrumb";
import { Acronym } from "../ui/Acronym";
import { MCO_URLS } from "../../data/references";
import {
  ArrowRightLeft,
  Clock,
  FileText,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Calendar,
  Shield,
  Plane,
  BookOpen,
  Target,
  Package,
  UserCheck,
  BarChart3,
  HelpCircle,
  Lightbulb,
  Award,
  Heart,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────── */
/*  Local Helper Components                                    */
/* ─────────────────────────────────────────────────────────── */

function InfoCard({
  icon: Icon,
  title,
  children,
  variant = "default",
}: {
  icon?: React.ElementType;
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success" | "info" | "danger";
}) {
  const variants = {
    default: "border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20",
    warning: "border-[var(--sa-gold)]/40 bg-[var(--sa-gold)]/10 dark:bg-[var(--sa-gold)]/20",
    success: "border-green-500/40 bg-green-500/10 dark:bg-green-500/20",
    info: "border-blue-500/40 bg-blue-500/10 dark:bg-blue-500/20",
    danger: "border-red-500/40 bg-red-500/10 dark:bg-red-500/20",
  };
  return (
    <div className={`rounded-lg border p-4 ${variants[variant]}`}>
      {(Icon || title) && (
        <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {Icon && <Icon className="h-5 w-5" />}
          {title}
        </div>
      )}
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </div>
  );
}

function TimelineCard({
  timeframe,
  title,
  items,
  icon: Icon,
  color = "gold",
}: {
  timeframe: string;
  title: string;
  items: { title: string; description?: string; references?: string[]; subitems?: string[] }[];
  icon: React.ElementType;
  color?: "gold" | "blue" | "green" | "purple" | "red";
}) {
  const colors = {
    gold: "border-[var(--sa-gold)] bg-[var(--sa-gold)]/10",
    blue: "border-blue-500 bg-blue-500/10",
    green: "border-green-500 bg-green-500/10",
    purple: "border-purple-500 bg-purple-500/10",
    red: "border-red-500 bg-red-500/10",
  };
  const iconColors = {
    gold: "text-[var(--sa-gold)]",
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
    red: "text-red-500",
  };
  return (
    <div className={`rounded-lg border-l-4 ${colors[color]} p-4`}>
      <div className="mb-3 flex items-center gap-2">
        <Icon className={`h-5 w-5 ${iconColors[color]}`} />
        <div>
          <div className={`text-xs font-medium uppercase ${iconColors[color]}`}>{timeframe}</div>
          <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</div>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded bg-white/50 p-3 dark:bg-black/20">
            <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.title}</div>
            {item.description && (
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
            )}
            {item.subitems && (
              <ul className="mt-2 space-y-1">
                {item.subitems.map((sub, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="text-[var(--sa-gold)]">•</span>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.references && (
              <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                <strong>References:</strong> {item.references.join(", ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CollapsibleSection({
  icon: Icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sa-navy)] text-white">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-zinc-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        )}
      </button>
      {isOpen && <div className="border-t border-black/5 p-4 dark:border-white/10">{children}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                             */
/* ─────────────────────────────────────────────────────────── */

export function TransitionOfCommandContent() {
  const breadcrumbItems = [
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-6 text-white shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
            <ArrowRightLeft className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Transition of Command</h1>
            <p className="mt-2 text-white/80">
              Pre-command preparation, change of command requirements, timeline-based actions, and turnover best practices. This checklist covers tasks from prior to assuming command through 120 days after.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Pre-Command</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">30/60/90 Day Actions</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Accountability</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Turnover</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard icon={FileText} title="Key References" variant="info">
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>CMC White Letter 3-17 dtd 2 May 2017 (Status of Command)</li>
            <li>MCO 4400.201 Volume 3 (Management of Property)</li>
            <li>Command Screening MARADMIN</li>
            <li>Cornerstone MARADMIN</li>
          </ul>
        </InfoCard>
        <InfoCard icon={Target} title="Critical Timeline" variant="warning">
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Pre-Command:</strong> Cornerstone, Certificate of Relief</li>
            <li><strong>30 Days:</strong> Safety policy, METL, fund control training</li>
            <li><strong>60 Days:</strong> SAPR policy, UPFRP SOP, account acceptance</li>
            <li><strong>90 Days:</strong> PAC policy, safety climate survey</li>
          </ul>
        </InfoCard>
      </div>

      <div className="rounded-lg border border-[var(--sa-gold)]/30 bg-[var(--sa-gold)]/10 p-4 dark:bg-[var(--sa-gold)]/20">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          <strong className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">As an incoming commander,</strong> you must complete required training, receive proper turnover documentation, and systematically assume accountability for personnel, equipment, and programs. <strong className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">As an outgoing commander,</strong> how you hand over the command reflects your leadership and puts the health and future of the organization above yourself.
        </p>
      </div>

      {/* How It Works Sections */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          How It Works
        </h2>

        {/* Prior to Change of Command */}
        <CollapsibleSection icon={Calendar} title="Prior to Change of Command" defaultOpen>
          <div className="space-y-4">
            <TimelineCard
              timeframe="Before Assuming Command"
              title="Pre-Command Requirements"
              icon={Award}
              color="purple"
              items={[
                {
                  title: "1. Attend Cornerstone",
                  description: "Attend Cornerstone: The Commandant's Combined Commandership Course",
                  references: ["Command screening MARADMIN", "Cornerstone MARADMIN"],
                },
                {
                  title: "2. Receive Certificate of Relief",
                  description: "Receive a Certificate of Relief from the previous Commanding Officer regarding the overall status of the supply account.",
                  subitems: [
                    "Accountability: Status of other unit held accounts (materiel signed out from UIF, Base Property, historical weapons, equipment temporarily loaned)",
                    "Fiscal: Status of funds report, budget execution, remaining fiscal year projection",
                    "Investigations: Status of on-going property related investigations",
                  ],
                  references: ["MCO 4400.201 Volume 3 v2, 010901, Para A", "IGMC Functional Area Checklist 4400.15"],
                },
                {
                  title: "3. Receive Status of Command Turnover",
                  description: "Receive a Status of Command turnover, including a Status of Command Letter, from outgoing Commander focusing on proper accountability and overall status of the entire command.",
                  subitems: ["The outgoing Commander must brief the next higher commander prior to the Change of Command"],
                  references: ["CMC White Letter 3-17 dtd 2 May 2017"],
                },
                {
                  title: "4. Get Higher Commander's Assessment",
                  description: "Sit down with your next higher Commander for clear conversation and understanding.",
                  subitems: [
                    "Their guidance and intent",
                    "Their understanding and assessment of challenges, strengths, weaknesses, culture, leadership, and performance",
                    "Keep this discussion private",
                    "During turnover, determine if assessment is reality or perception",
                    "If perception, develop leadership team action items to correct through demonstrated sustained high performance",
                  ],
                },
              ]}
            />

            <InfoCard icon={Lightbulb} title="Best Practice: Inventory Spot Checks" variant="success">
              Although an inventory is not required, an inventory with spot checks by you is good practice to document the status of equipment possessed by <Acronym title="Responsible Officers">ROs</Acronym> and materiel maintained by Supply Officer.
            </InfoCard>

            <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 dark:bg-blue-500/20">
              <div className="mb-2 flex items-center gap-2">
                <Plane className="h-5 w-5 text-blue-500" />
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Aviation Commanders Only
                </h4>
              </div>
              <p className="mb-3 text-sm text-zinc-700 dark:text-zinc-300">
                Officers selected to a flying squadron shall arrive at their parent (gaining) command at least <strong>six months</strong> prior to their scheduled change of command and complete the following training before assuming command:
              </p>
              <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>Applicable flight refresher training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>Aviation Commander&apos;s Course given at <Acronym title="Marine Aviation Weapons and Tactics Squadron One">MAWTS-1</Acronym></span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                <strong>Waivers:</strong> Six-month requirement waivers must come from <Acronym title="Manpower and Reserve Affairs">M&amp;RA</Acronym>.<br />
                <strong>References:</strong> MARADMIN 270/05, MCO 3500.27C, MCO 5100.29C, NAVMC 3500.109A
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Within 30 Days */}
        <CollapsibleSection icon={Clock} title="Within 30 Days Post Change of Command">
          <div className="space-y-4">
            <TimelineCard
              timeframe="First 30 Days"
              title="Immediate Actions Required"
              icon={ClipboardCheck}
              color="green"
              items={[
                {
                  title: "1. Publish Safety Policy Statement",
                  references: ["MCO 5100.29C, Chap 2, Para 0204", "IGMC Functional Area Checklist 5100.29, Question 0102"],
                },
                {
                  title: "2. Attend Command Team Training",
                  description: "Ensure your Family Readiness Command Team attends training. FRO coordinates with Marine Corps Family Team Building.",
                  subitems: [
                    "Commanding Officer",
                    "Executive Officer",
                    "Sergeant Major/Sr. Enlisted",
                    "Chaplain",
                    "FRO",
                    "Single Marine Representative",
                    "CO/Senior Enlisted spouse",
                    "Command Team Advisor",
                  ],
                  references: ["MCO 1754.9A, Chap 2, Para 2.A.(2)", "IGMC Functional Area Checklist 1754.9"],
                },
                {
                  title: "3. Receive SAPR Resource Brief",
                  description: "Contact Installation SARC to receive the SAPR Resource Brief. When not located on a Marine Corps installation, contact supporting SARC.",
                  references: ["MCO 1752.5C, Chap 3, Para 8.a"],
                },
                {
                  title: "4. Review and Submit METL",
                  description: "Review, update, and submit the unit's METL to next HHQ for approval annually, within 30 days of assuming command, or within 15 days of assignment of new mission.",
                  references: ["MCO 1553.3B, Para 4.b.(3)(a)", "MCO 3500.110", "MARADMIN 177/08"],
                },
                {
                  title: "5. Complete Fund Control Training",
                  description: "Complete DON required Fund Control Personnel training within two weeks of assuming command. Provide certificates to comptroller or fiscal officer.",
                  subitems: [
                    "Appropriations Law: Refresh within three years",
                    "DON Budget Execution: Once in a career",
                  ],
                  references: ["SECNAVINST 7000.27D", "ASN (FM&C) memo of 17 Oct 2018", "MARADMIN 350/11"],
                },
              ]}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Plane} title="Aviation Safety Surveys (30 Days)" variant="info">
                All flying, UAS, MALS, and aviation detachments shall initiate the following safety surveys within 30 days of change of command and annually thereafter:
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li><Acronym title="Command Safety Assessment">CSA</Acronym>: Squadron safety from aircrew vantage point</li>
                  <li><Acronym title="Maintenance Climate Assessment Survey">MCAS</Acronym>: Feedback on safety climate from aircraft maintainers</li>
                  <li><Acronym title="Administrative Support Personnel Assessment">ASPA</Acronym>: Non-aircrew and non-maintainer personnel</li>
                </ul>
              </InfoCard>
              <InfoCard icon={Package} title="Supply and Property Actions" variant="default">
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Conduct necessary supply inspection to determine condition of materiel, records, and operating procedures</li>
                  <li>Retain as endorsement to outgoing CO&apos;s Certificate of Relief letter</li>
                  <li>Account for everything you are responsible for (see it, touch it, spot check SL-3 inventories)</li>
                  <li>Ensure Supply Officer is assigned in writing</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </CollapsibleSection>

        {/* Within 60 Days */}
        <CollapsibleSection icon={Clock} title="Within 60 Days Post Change of Command">
          <div className="space-y-4">
            <TimelineCard
              timeframe="First 60 Days"
              title="Continued Requirements"
              icon={FileText}
              color="blue"
              items={[
                {
                  title: "1. Publish SAPR Policy Statement",
                  description: "Publish a policy statement on sexual assault prevention and response.",
                  references: ["MCO 1752.5C, Chap 3, Para 5.a"],
                },
                {
                  title: "2. Publish UPFRP SOP",
                  description: "Publish a Unit, Personal and Family Readiness Program (UPFRP) SOP outlining roles and responsibilities specific to the unit for each UPFRP requirement. Col-level includes DRC/URC roles and responsibilities within the command.",
                  references: ["MCO 1754.9B, Para 4.b", "IGMC Functional Area Checklist 1754.9"],
                },
                {
                  title: "3. Publish Command Philosophy/Guidance (Optional)",
                  description: "Establish your command philosophy and communicate your expectations to the unit.",
                },
              ]}
            />

            <InfoCard icon={Package} title="Supply and Property Actions (60 Days)" variant="warning">
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Continue to account for everything (see it, touch it, spot check SL-3)</li>
                <li>Ensure Responsible Officers are assigned in writing</li>
                <li>Have staff provide latest internal inspection or <Acronym title="Field Supply and Maintenance Analysis Office">FSMAO</Acronym> analysis results</li>
                <li>Take a couple of days to review results and formulate questions</li>
                <li>Conduct walkthrough of maintenance and supply sections</li>
                <li>Get to know your Marines</li>
                <li>Have staff provide holistic overview of supply, fiscal processes, and maintenance operations</li>
              </ul>
            </InfoCard>

            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 dark:bg-red-500/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  60-Day Account Acceptance Window
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                After assuming command, you have <strong>60 days</strong> to review, inspect, and report any discrepancies before you accept the account. Use this time wisely to verify everything.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Within 90 Days */}
        <CollapsibleSection icon={Clock} title="Within 90 Days Post Change of Command">
          <div className="space-y-4">
            <TimelineCard
              timeframe="First 90 Days"
              title="Final Transition Requirements"
              icon={Shield}
              color="gold"
              items={[
                {
                  title: "1. Publish PAC Policy",
                  description: "Publish and prominently post written command policy that implements MCO 5354.1E.",
                  references: ["MCO P5354.1E w/CH 1, para 020306"],
                },
                {
                  title: "2. Publish SAPR Command Policy Statement",
                  description: "Publish and prominently post a command policy statement regarding sexual assault awareness and prevention that supports SAPR program objectives.",
                  references: ["MCO 1752.5C"],
                },
                {
                  title: "3. Complete Safety Climate Survey (O-5 and O-6 Only)",
                  description: "O-5 and O-6 level commanders shall complete the appropriate safety climate survey to assess their command climate within 90 days following a change of command (to establish a baseline) and annually thereafter.",
                  references: ["MCO 5100.29C, Para 060402", "IGMC Functional Area Checklist 5100-Safety, Question 0113"],
                },
                {
                  title: "4. Request MCCS Brief",
                  description: "Request a brief from the supporting Marine Corps Community Services (MCCS) representative for the purposes of becoming familiar with local MCCS functions that support the UPFRP.",
                  references: ["MCO 1754.9B, Para 4.b", "IGMC Functional Area Checklist 1754.9"],
                },
                {
                  title: "5. Complete Family Advocacy Training",
                  description: "All commanders shall be trained on the prevention and response to child abuse and domestic abuse.",
                  references: ["MCO 1754.11, page 9, par 3b(7)(b)", "IGMC Functional Area Checklist 1754.11"],
                },
              ]}
            />
          </div>
        </CollapsibleSection>

        {/* Prior to Relinquishing Command */}
        <CollapsibleSection icon={Calendar} title="Within 90 Days Prior to Relinquishing Command">
          <div className="space-y-4">
            <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4 dark:bg-purple-500/20">
              <div className="mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  DEOCS Survey Requirement
                </h4>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Initiate a Defense Equal Opportunity Climate Survey (<Acronym title="Defense Equal Opportunity Climate Survey">DEOCS</Acronym>) within 90 days prior to relinquishing command.
              </p>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                <strong>References:</strong> MARADMIN 291/19, MCO P5354.1E w/CH 1, Para 0103
              </p>
            </div>

            <InfoCard icon={Heart} title="Preparing Your Command for Transition" variant="success">
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Put a lot of effort into preparing command for transition to next Commander</li>
                <li>The mark of any Commander is how they hand over the command</li>
                <li>Put health and future of organization above yourself</li>
                <li>Ensure your relief says &quot;I couldn&apos;t have asked for more&quot;</li>
                <li>Ensure Marines and Sailors see you work hard on their behalf</li>
                <li>Take great pride in doing this right: personally, professionally, and socially</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Accountable Officer Responsibilities */}
        <CollapsibleSection icon={UserCheck} title="Accountable Officer Responsibilities">
          <div className="space-y-4">
            <InfoCard icon={AlertTriangle} title="You Are Accountable" variant="danger">
              As the CO, you are accountable. Per MCO 4400.150: &quot;The CO of a unit having a consumer-level supply account is accountable by virtue of the acceptance of command.&quot; You have been appointed to Command by the Commandant of the Marine Corps to assume all fiduciary, accountability, and policy requirements. Although certain commands may delegate <Acronym title="Accountable Officer">AO</Acronym> responsibilities, you the Commander are ultimately responsible for the accountability of the supply account.
            </InfoCard>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-white p-4 dark:border-white/10 dark:bg-black/40">
                <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Supply Officer Relief
                </h4>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Supply Officer furnishes letter of certification of relief to relieving Supply Officer indicating status of supply within command</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Within 60 days of appointment, newly assigned Supply Officer will, via endorsement to appointment letter, inform CO of estimate on condition of supply account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>HQMC requires complete unit inventory conducted in conjunction with change of Supply Officer</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-white p-4 dark:border-white/10 dark:bg-black/40">
                <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Responsible Officer Changes
                </h4>
                <p className="mb-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Upon change of <Acronym title="Responsible Officers">ROs</Acronym>, the relieving RO will:
                </p>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Inventory and carefully inspect all items on supply records for that account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Report all overages and shortages on <Acronym title="Consolidated Memorandum Receipt">CMR</Acronym> to Supply Officer before transferring responsibility for property</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Readiness Reporting Requirements */}
        <CollapsibleSection icon={BarChart3} title="Readiness Reporting Requirements">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={BookOpen} title="Training Requirements">
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Reporting unit commanders: MarineNet <Acronym title="Defense Readiness Reporting System - Marine Corps">DRRS-MC</Acronym> policy course within <strong>30 days</strong></li>
                  <li>Unit readiness officers/SNCOs: MarineNet DRRS-MC policy course and <Acronym title="Netcentric Unit Status Report">NETUSR</Acronym> web-based training within <strong>30 days</strong></li>
                  <li>Formal training from DRRS-MC trainer within <strong>90 days</strong></li>
                </ul>
              </InfoCard>
              <InfoCard icon={FileText} title="Appointments">
                All unit readiness officers/SNCOs and authorized agents must be appointed in writing by the commander.
              </InfoCard>
            </div>

            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/50 p-4 dark:border-white/10 dark:bg-[var(--sa-navy)]/30">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Readiness Officer Turnover Binder (Best Practice)
              </h4>
              <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                Ensure unit readiness officer maintains current turnover binder containing:
              </p>
              <div className="grid gap-2 md:grid-cols-2">
                {[
                  "MCO 3000.13B and Commanders Readiness Handbook",
                  "MARADMINs/AMHS Messages pertaining to DRRS",
                  "Unit SOPs",
                  "IGMC Functional Area Checklist - Unit Readiness 3000",
                  "Appointment Letters",
                  "Training Certificates",
                  "12 months of Readiness Board records",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>

      {/* Important Things to Know */}
      <div className="rounded-xl border border-[var(--sa-gold)]/30 bg-[var(--sa-gold)]/10 p-6 dark:bg-[var(--sa-gold)]/20">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <AlertTriangle className="h-6 w-6" />
          Important Things to Know
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Certificate of Relief is Critical
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Receive before change of command. Should include accountability, fiscal, and investigations status. Conduct spot checks to verify.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                60 Days to Accept Account
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                After assuming command, you have 60 days to review, inspect, and report discrepancies. Use this time to verify everything.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Outgoing Commander Must Brief HHQ
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Brief next higher commander prior to change of command. Status of Command Letter required.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Training is Mandatory
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Cornerstone before command. Various courses within 30 days. Fund Control training within two weeks.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Policy Statements Have Deadlines
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Safety: 30 days | SAPR: 60 days (policy), 90 days (command policy) | PAC: 90 days | UPFRP SOP: 60 days
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Situations */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <HelpCircle className="h-6 w-6" />
          Special Situations
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 dark:bg-orange-500/20">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Leading Change (Turning Around a Failing Unit)
            </h4>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Confirm with next higher Commander that leading change is specific or implied task</li>
              <li>Share observations and discuss way ahead</li>
              <li>Get solid base of understanding and support from Wing/Group Commander</li>
              <li>Develop plan and implement necessary changes</li>
            </ul>
          </div>
          <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 dark:bg-blue-500/20">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Aviation Commander Preparation
            </h4>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Arrive at gaining command six months prior to change of command</li>
              <li>Complete flight refresher training</li>
              <li>Complete Aviation Commander&apos;s Course at <Acronym title="Marine Aviation Weapons and Tactics Squadron One">MAWTS-1</Acronym></li>
              <li>Waivers from <Acronym title="Manpower and Reserve Affairs">M&amp;RA</Acronym> only</li>
            </ul>
          </div>
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 dark:bg-green-500/20">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Preparing Your Command for Transition
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              The mark of any Commander is how they hand over the command. Put the health and future of the organization above yourself. Ensure your relief says &quot;I couldn&apos;t have asked for more.&quot; Ensure Marines and Sailors see you work hard on their behalf. Take great pride in doing this right: personally, professionally, and socially.
            </p>
          </div>
        </div>
      </div>

      {/* Common Problems and Solutions */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Lightbulb className="h-6 w-6" />
          Common Problems and Solutions
        </h2>
        <div className="space-y-4">
          {[
            {
              problem: "Incomplete turnover documentation",
              solution: "Ensure Certificate of Relief includes all required elements (accountability, fiscal, investigations). Request complete Status of Command Letter. Brief and be briefed by next higher commander.",
            },
            {
              problem: "Unknown equipment status",
              solution: "Conduct spot checks of SL-3 inventories. Walk the lot. Verify equipment possessed by ROs. Use 60-day window to identify discrepancies.",
            },
            {
              problem: "Missed training deadlines",
              solution: "Schedule Cornerstone before command. Complete Fund Control training within two weeks. Complete DRRS-MC course within 30 days. Track all required training deadlines.",
            },
            {
              problem: "Policy statements not published",
              solution: "Use checklist to track deadlines. Safety (30 days), SAPR policy (60 days), SAPR command policy (90 days), PAC (90 days), UPFRP SOP (60 days).",
            },
            {
              problem: "Readiness reporting gap",
              solution: "Appoint readiness officers in writing. Ensure training completed within timelines. Maintain turnover binder with 12 months of records.",
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/30 p-4 dark:border-white/10 dark:bg-[var(--sa-navy)]/30">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Problem: {item.problem}
              </h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Solution:</strong> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Links */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Key Links
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training</h3>
            <div className="space-y-2">
              {[
                { name: "Cornerstone", desc: "See current MARADMIN", url: "" },
                { name: "Fund Control Training", desc: "DON fiscal training", url: "https://fmonline.ousdc.osd.mil/Default.aspx" },
                { name: "DRRS-MC Training", desc: "Readiness reporting", url: "https://www.marinenet.usmc.mil/" },
                { name: "Aviation Safety Surveys", desc: "CSA, MCAS, ASPA", url: "https://www.marineaviation.org" },
                { name: "Safety Climate Survey", desc: "O-5/O-6 requirement", url: "https://www.safety.marines.mil/" },
              ].map((link) =>
                link.url ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 p-3 transition hover:bg-[var(--sa-navy)]/10 dark:border-white/10 dark:bg-[var(--sa-navy)]/30 dark:hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                    <div>
                      <div className="text-sm font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                        {link.name}
                      </div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">{link.desc}</div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={link.name}
                    className="flex items-center gap-2 rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 p-3 dark:border-white/10 dark:bg-[var(--sa-navy)]/30"
                  >
                    <FileText className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                    <div>
                      <div className="text-sm font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                        {link.name}
                      </div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">{link.desc}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h3>
            <div className="space-y-2">
              {[
                { name: "CMC White Letter 3-17", desc: "Status of Command", url: "#" },
                { name: "MCO 4400.201 Vol 3", desc: "Management of Property", url: MCO_URLS.PROPERTY_MANAGEMENT_VOL3 },
                { name: "MCO 5100.29C", desc: "Safety Management System", url: MCO_URLS.SAFETY_MANAGEMENT },
                { name: "MCO 1752.5C", desc: "SAPR Program", url: MCO_URLS.SAPR },
                { name: "MCO 1754.9B", desc: "Unit, Personal and Family Readiness", url: MCO_URLS.FAMILY_READINESS },
                { name: "MCO P5354.1E", desc: "Prohibited Activities and Conduct", url: MCO_URLS.PAC_PREVENTION },
                { name: "MCO 3000.13B", desc: "Unit Readiness", url: MCO_URLS.READINESS_REPORTING },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 p-3 transition hover:bg-[var(--sa-navy)]/10 dark:border-white/10 dark:bg-[var(--sa-navy)]/30 dark:hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                  <div>
                    <div className="text-sm font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {link.name}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="flex gap-3">
        <Link
          href="/roles/commanders"
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10"
        >
          Back to Commanders Home
        </Link>
      </div>
    </div>
  );
}
