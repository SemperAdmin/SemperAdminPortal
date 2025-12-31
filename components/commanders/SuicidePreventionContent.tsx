"use client";

import { useState } from "react";
import { Acronym } from "../ui/Acronym";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Users,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  ExternalLink,
  Phone,
  UserCheck,
  Activity,
  RefreshCw,
  Clock,
  AlertCircle,
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
  variant?: "info" | "warning" | "success" | "tip" | "danger";
}

function InfoCard({ title, children, variant = "info" }: InfoCardProps) {
  const styles = {
    info: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
    warning: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20",
    success: "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/20",
    tip: "border-l-purple-500 bg-purple-50 dark:bg-purple-950/20",
    danger: "border-l-rose-500 bg-rose-50 dark:bg-rose-950/20",
  };

  const icons = {
    info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    success: <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    tip: <Info className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    danger: <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />,
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

function CrisisResourceCard() {
  return (
    <div className="rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 p-6 text-white shadow-lg">
      <div className="flex items-center gap-3">
        <Phone className="h-8 w-8" />
        <div>
          <div className="text-xl font-bold">Crisis Resources - 24/7</div>
          <div className="mt-1 text-rose-100">Immediate help is available</div>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-white/10 p-3">
          <div className="font-semibold">Military Crisis Line</div>
          <div className="text-lg font-bold">1-800-273-8255, Press 1</div>
          <div className="text-sm text-rose-100">Text: 838255</div>
        </div>
        <div className="rounded-lg bg-white/10 p-3">
          <div className="font-semibold">DSTRESS Line</div>
          <div className="text-lg font-bold">1-877-476-7734</div>
          <div className="text-sm text-rose-100">www.dstressline.com</div>
        </div>
      </div>
    </div>
  );
}

export function SuicidePreventionContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white">
        <h1 className="text-3xl font-bold">Suicide Prevention and Force Preservation</h1>
        <p className="mt-2 text-lg text-zinc-200">
          Identifying risk, supporting Marines, and responding to crisis
        </p>
      </div>

      {/* Crisis Resources - Always Visible */}
      <CrisisResourceCard />

      {/* Overview */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Overview
        </h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Suicide prevention is a commander&apos;s program. Every leader must know their Marines to
          recognize unhealthy stress responses, promote an environment where mental wellness is
          prioritized, and use the Marine Corps Suicide Prevention System (<Acronym title="Marine Corps Suicide Prevention System">MCSPS</Acronym>) to care for
          Marines at risk. How you respond to suicide-related events directly impacts whether
          Marines in your unit will seek help in times of crisis.
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          The Marine Corps strategy for reducing suicides focuses on four lines of effort:
          prevention and skill building, use of data and research, communication, and collaboration.
          Your role spans all four areas. You set the climate, track risk through <Acronym title="Command Individual Risk and Resiliency Assessment System">CIRRAS</Acronym>,
          communicate openly about help-seeking, and coordinate with medical and behavioral health
          resources.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key References
          </h3>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            <li>• MCO 1720.2A (Marine Corps Suicide Prevention Program)</li>
            <li>• NAVMC 1720.1 (Marine Corps Suicide Prevention System)</li>
            <li>• USMC Command Suicide Prevention and Risk Mitigation Strategies (2022)</li>
            <li>• Commander&apos;s Checklist for Response to Suicide-Related Events</li>
          </ul>
        </div>
      </div>

      {/* SPPO */}
      <CollapsibleSection
        title="Suicide Prevention Program Officer (SPPO)"
        icon={<UserCheck className="h-5 w-5" />}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Appointment
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Collateral duty assignment</li>
                <li>Appoint in writing</li>
                <li>Marine or Sailor</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Responsibilities
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Coordinate resources for unit suicide prevention program</li>
                <li>Liaise with behavioral health resources</li>
                <li>Track training completion</li>
                <li>Support Force Preservation Council activities</li>
                <li>Maintain awareness of unit stressors and risk factors</li>
              </ul>
            </div>
          </div>

          <InfoCard title="SPPO Does NOT" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Provide clinical care</li>
              <li>Replace behavioral health professionals</li>
              <li>Serve as sole point of contact for at-risk Marines</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* CIRRAS */}
      <CollapsibleSection
        title="Command Individual Risk and Resiliency Assessment System (CIRRAS)"
        icon={<Activity className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <Acronym title="Command Individual Risk and Resiliency Assessment System">CIRRAS</Acronym> is a single, standardized software-based tool that enables proactive
            identification of individual risk and resiliency factors. It facilitates real-time risk
            mitigation and management and allows commanders and leaders to review force preservation
            information at any time.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Responsibilities
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Ensure CIRRAS is updated to reflect current needs, issues, and actions</li>
                <li>Review CIRRAS data during <Acronym title="Force Preservation Council">FPC</Acronym> discussions</li>
                <li>Use CIRRAS to track Marines with elevated risk</li>
                <li>Ensure updates after significant life changes</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                When to Update CIRRAS
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>New Marine joins command (initial assessment)</li>
                <li>Significant life changes occur</li>
                <li>Critical stressors identified</li>
                <li>Following suicide-related events</li>
                <li>After leadership takes action to support Marine</li>
                <li>Regular reassessment per command battle rhythm</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Force Preservation Council */}
      <CollapsibleSection
        title="Force Preservation Council (FPC)"
        icon={<Users className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Discuss individual Marines and their risk/resiliency factors</li>
                <li>Coordinate support and resources</li>
                <li>Track actions taken to support at-risk Marines</li>
                <li>Ensure continuity of care across leadership changes</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Responsibilities
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Establish FPC meeting schedule (monthly minimum recommended)</li>
                <li>Ensure all new Marines are discussed at initial FPC</li>
                <li>Review Marines with elevated risk indicators</li>
                <li>Direct resources and support actions</li>
                <li>Update CIRRAS based on FPC discussions</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              FPC Discussion Topics
            </div>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                New joins and their integration
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Marines with critical stressors
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Marines returning from hospitalization or treatment
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Marines with recent disciplinary actions (first 90 days post-<Acronym title="Non-Judicial Punishment">NJP</Acronym>)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Marines approaching transition (<Acronym title="End of Active Service">EAS</Acronym>, AdSep, MedBoard)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Follow-up on previously identified at-risk Marines
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Critical Stressors */}
      <CollapsibleSection
        title="Critical Stressors"
        icon={<AlertTriangle className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Critical stressors have been associated with increased suicide risk among military
            service members. Command must be aware of these stressors and act quickly to help
            mitigate them.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Common Critical Stressors
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>Relationship distress</strong> (most common shared experience among Marines who died by suicide)</li>
                <li>Financial problems</li>
                <li>Negative transitions out of the Marine Corps</li>
                <li>Mental health challenges including substance misuse</li>
                <li>Anticipated or actual legal/military charges</li>
                <li>Fall from grace/glory (sudden loss of status)</li>
                <li>Social isolation</li>
                <li><Acronym title="Permanent Change of Station">PCS</Acronym> problems</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
              <div className="font-semibold text-rose-700 dark:text-rose-400">
                High-Risk Periods
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>First 90 days</strong> following disciplinary action (NJP, court-martial)</li>
                <li>Transition periods (new to unit, approaching EAS, returning from treatment)</li>
                <li>Anniversaries of significant events (1 month, 6 months, 1 year after suicide in unit)</li>
                <li>Following relationship breakups</li>
                <li>During and after legal proceedings</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Warning Signs
            </div>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Appearing overwhelmed by recent stressors
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Experiencing fall from glory, loss of honor, change in status
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Withdrawing from friends, family, unit
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Losing interest in hobbies, work, things previously cared about
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Feeling hopeless, helpless, worthless
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Talking about feeling trapped with no way out
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Recent suicidal ideation
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                Making comments suggesting thoughts or plans of suicide
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Lethal Means Safety */}
      <CollapsibleSection
        title="Lethal Means Safety"
        icon={<Shield className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Lethal means safety refers to techniques, policies, and procedures designed to reduce
            access or availability to lethal means. Lethal means include firearms, drugs, poisons,
            and other highly lethal methods.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Actions
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Discuss lethal means safety with Marines during check-in</li>
                <li>Ensure SNCOs speak with Marines about lethal means safety</li>
                <li>Talk about safe storage of personally owned firearms</li>
                <li>Address expired or unused medications</li>
                <li>Consider reduced access for Marines in crisis</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Firearm Safety Discussions
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Encourage use of gun locks</li>
                <li>Discuss storing personally owned weapons on base</li>
                <li>Normalize conversations about safe storage</li>
                <li>Frame as safety measure, not punishment</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Lethal Means Restriction" variant="info">
            Removing access to lethal means while an individual is in a suicide-related crisis.
            Collaborate with behavioral health on recommendations for duty restrictions and reduced
            access.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Prevention Strategies */}
      <CollapsibleSection
        title="Prevention Strategies"
        icon={<Heart className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border-l-4 border-l-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
              <div className="font-semibold text-blue-700 dark:text-blue-400">
                For New Marines (E1-E4)
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Ensure proper check-in</li>
                <li>SNCO reaches out to welcome</li>
                <li>Discuss lethal means safety and resources</li>
                <li>Assess resources at initial FPC</li>
                <li>Recommend mentor if lacking local relationships</li>
                <li>Update CIRRAS</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4 dark:bg-amber-950/20">
              <div className="font-semibold text-amber-700 dark:text-amber-400">
                For Marines with Multiple Stressors
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Increase leadership presence</li>
                <li>Direct <Acronym title="Operational Stress Control and Readiness">OSCAR</Acronym> team to share stress management</li>
                <li>Follow up on lethal means safety</li>
                <li>Encourage <Acronym title="Community Counseling Program">CCP</Acronym>, <Acronym title="Military and Family Life Counselor">MFLC</Acronym>, chaplain</li>
                <li>Update FPC and CIRRAS regularly</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
              <div className="font-semibold text-rose-700 dark:text-rose-400">
                Following Disciplinary Action
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>First 90 days is high-risk</strong></li>
                <li>Encourage follow-up with CCP, <Acronym title="Substance Abuse Program">SAP</Acronym>, MFLC, or chaplain</li>
                <li>Consult with OSCAR team and SPPOs</li>
                <li>Conduct monthly counseling</li>
                <li>Be aware of compounding stressors</li>
                <li>Connect with <Acronym title="Unit Transition Coordinator">UTC</Acronym> if approaching EAS</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Building Protective Factors
            </div>
            <div className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-3 lg:grid-cols-5">
              {[
                "Cohesion",
                "Connectedness",
                "Engagement",
                "Fairness",
                "Inclusion",
                "Leadership support",
                "Morale",
                "Transformational leadership",
                "Work-life balance",
                "Safe storage for lethal means",
              ].map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 dark:bg-emerald-950/20"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Risk Mitigation */}
      <CollapsibleSection
        title="Risk Mitigation"
        icon={<Activity className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Following Suicide-Related Event (Marine Not Hospitalized)
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Ensure supervisor/designee checks in with Marine</li>
              <li>Unit leaders meet regularly for supportive (not punitive) contact</li>
              <li>Encourage participation in Marine Intercept Program (<Acronym title="Marine Intercept Program">MIP</Acronym>)</li>
              <li>Collaborate with behavioral health on ongoing monitoring and duty restrictions</li>
              <li>Encourage leadership discussions about issues Marine is facing</li>
              <li>Update FPC and CIRRAS</li>
            </ul>
          </div>

          <InfoCard title="Key Consideration" variant="danger">
            Following a suicide-related event, the individual is at <strong>higher risk for a second
            event</strong>. How you react will impact whether other Marines disclose stressors or
            suicidal thoughts.
          </InfoCard>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              When Provider Says &quot;Put a Watch&quot; on Marine
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Ask clarifying questions - each provider may mean something different</li>
              <li>Ask provider to be specific about what you need to do</li>
              <li>If provider is uncomfortable with Marine&apos;s safety if left alone, ask why not hospitalized</li>
              <li>Engage with Unit Medical Officer, Flight Surgeon, or OSCAR Provider</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Reintegration */}
      <CollapsibleSection
        title="Reintegration"
        icon={<RefreshCw className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Following Hospitalization for Suicide Attempt
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Meet with Marine to discuss transition back</li>
                <li>Ensure Marine feels equipped to handle stressors</li>
                <li>Set up communication plan</li>
                <li>Encourage continued behavioral health support</li>
                <li>Communicate respect, trust, and belonging</li>
                <li>Give meaningful work assignments</li>
                <li>Update FPC and CIRRAS</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Following Treatment for Substance Misuse
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Connect with local follow-up care and maintenance</li>
                <li>Communicate importance of seeking help and returning to fight</li>
                <li>Make reintegration a continuous process</li>
                <li>Set positive command climate for help-seeking</li>
                <li>Encourage non-substance related unit activities</li>
                <li>Update FPC and CIRRAS</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Following Resolution of Legal Case
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Engage unit leaders about not undermining Marine&apos;s reputation</li>
                <li>Encourage kneecap-to-kneecap discussions</li>
                <li>Help Marine refocus on mission</li>
                <li>Assess physical, mental, spiritual, and social fitness</li>
                <li>Use OSCAR team and SPPOs to identify less obvious stressors</li>
                <li>Update FPC and CIRRAS</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Key Principle" variant="success">
            Reintegration protects Marine&apos;s confidentiality while helping transition back with
            dignity and respect.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Postvention */}
      <CollapsibleSection
        title="Postvention (After Death by Suicide)"
        icon={<Heart className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Immediate Actions
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Meet with Marines directly involved and adjacent unit members</li>
                <li>Offer services and resources</li>
                <li>Provide space and time for bereavement and grief</li>
                <li>Use Commander&apos;s Checklist for Response to Suicide-Related Events</li>
                <li>Increase leadership presence throughout unit</li>
                <li>Increase accessibility to CCP, MFLCs, Chaplains, behavioral health</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
              <div className="font-semibold text-rose-700 dark:text-rose-400">
                Special Attention To
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>Marines who witnessed or found the individual</strong> (increased risk for suicide)</li>
                <li>Marines and family members who were close to deceased</li>
                <li>Roommates, friends, and immediate work section</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Long-Term Considerations" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Anniversaries are periods of increased risk (1 month, 6 months, 1 year)</li>
              <li>Promote healthy behaviors during anniversary periods</li>
              <li>Be attuned to those grieving or having difficult time</li>
              <li>Other Marines base their decision to seek help on how you respond</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Important Things to Know
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <InfoCard title="Commander's Role" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Suicide prevention is a commander&apos;s program</li>
              <li>How you speak about resources directly influences whether Marines get help</li>
              <li>The more supportive you are about using resources early, the more likely Marines will reach out</li>
              <li>Your reaction to suicidal behavior impacts unit willingness to disclose</li>
            </ul>
          </InfoCard>

          <InfoCard title="Key Principles" variant="tip">
            <ul className="list-inside list-disc space-y-1">
              <li>Know your Marines (families, friends, interests, challenges)</li>
              <li>Champion small unit leadership</li>
              <li>Create standard for assessing risk and battle rhythm for reassessment</li>
              <li>Reinforce that getting help is positive and proactive</li>
              <li>Even when things seem better, Marine remains at risk</li>
            </ul>
          </InfoCard>

          <InfoCard title="E1-E4 Marines" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Although any Marine may be at risk, E1-E4 Marines have elevated risk</li>
              <li>Be especially vigilant during their first months in unit</li>
              <li>Ensure integration and mentorship</li>
            </ul>
          </InfoCard>

          <InfoCard title="Medical vs Mental Health Professionals" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Medical health professional:</strong> PCM, flight surgeon, doctor</li>
              <li><strong>Mental health professional (MHP):</strong> Psychiatrist, psychologist, social worker</li>
              <li>Competent Medical Authority (<Acronym title="Competent Medical Authority">CMA</Acronym>) is NOT required to determine if ideation occurred</li>
            </ul>
          </InfoCard>
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
              Problem: Marine shows no obvious signs but has suicide-related event
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Many Marines show minimal or no signs. Continue support
              even when Marine appears to be doing better. Ensure CIRRAS reflects ongoing
              monitoring. Reinforce to unit that help-seeking is positive.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Uncertainty about what &quot;watch&quot; means when provider directs it
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Ask clarifying questions. Each provider may use term
              differently. Ask what specific actions are required. If provider wants Marine watched
              24/7 but won&apos;t hospitalize, ask why.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Unit climate discourages help-seeking
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Lead by example. Speak positively about resources. Share
              stories of Marines who got help and returned to duty. Make resources accessible and
              known. Do not stigmatize Marines who seek help.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: High-performing Marine receives NJP
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> First 90 days is high-risk. &quot;Fall from glory&quot; is
              warning sign. Connect with CCP, MFLC, chaplain. Monitor for compounding stressors.
              Conduct regular counseling. Recognize this Marine may struggle more than expected.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Concern about Marine but no clear indicators
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Trust your instincts. Check in with Marine. Offer
              resources. Update CIRRAS. Better to over-support than miss an at-risk Marine.
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
            href="https://www.veteranscrisisline.net/get-help/military-crisis-line"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <Phone className="h-4 w-4 text-rose-500" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Military Crisis Line Chat</span>
          </a>
          <a
            href="https://www.dstressline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <Phone className="h-4 w-4 text-rose-500" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">DSTRESS Line</span>
          </a>
          <a
            href="https://www.usmc-mccs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Marine and Family Programs</span>
          </a>
          <a
            href="https://www.thegearlocker.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Gear Locker (MAPIT Dashboard)</span>
          </a>
          <a
            href="https://www.dspo.mil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Defense Suicide Prevention Office</span>
          </a>
          <a
            href="https://www.marines.mil/News/Publications/MCPEL/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">NAVMC 1720.1</span>
          </a>
        </div>

        <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
          <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Installation Resources
          </div>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li>• Community Counseling Program (CCP)</li>
            <li>• Military and Family Life Counselors (MFLCs)</li>
            <li>• Chaplain</li>
            <li>• OSCAR Team</li>
            <li>• Substance Abuse Program (SAP)</li>
          </ul>
        </div>
      </div>

      {/* Final Note */}
      <InfoCard title="This Is Leadership at Its Most Essential" variant="success">
        Suicide prevention is foundational to force preservation. Your visible commitment to
        supporting Marines, reducing stigma around help-seeking, and swift response to warning signs
        directly impacts whether Marines live or die. This is not an administrative program—it is
        leadership at its most essential.
      </InfoCard>
    </div>
  );
}
