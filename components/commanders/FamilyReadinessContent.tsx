"use client";

import { useState } from "react";
import { Acronym } from "../ui/Acronym";
import { FAMILY_URLS } from "../../data/references";
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
  Home,
  FileText,
  Clock,
  AlertCircle,
  GraduationCap,
  Plane,
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

function TimelineBadge({ time }: { time: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      <Clock className="h-3 w-3" />
      {time}
    </span>
  );
}

export function FamilyReadinessContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white">
        <h1 className="text-3xl font-bold">Family Readiness and Casualty Affairs</h1>
        <p className="mt-2 text-lg text-zinc-200">
          Supporting families, caring for wounded Marines, and honoring the fallen
        </p>
      </div>

      {/* Overview */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Overview
        </h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Family readiness directly impacts unit readiness. When Marines worry about their families,
          they cannot focus on the mission. As a commander, you establish the programs and climate
          that ensure families are prepared for the demands of military life, supported during
          separations, and cared for when tragedy strikes.
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          Your responsibilities span the full spectrum: from ensuring a Family Readiness Officer
          coordinates support programs, to overseeing wounded warrior care coordination, to ensuring
          proper casualty notification and assistance. These are not administrative functions—they
          are leadership responsibilities that demonstrate your commitment to taking care of Marines
          and their families.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key References
          </h3>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            <li>• MCO 1754.9B (Unit, Personal and Family Readiness Program)</li>
            <li>• MCO 1754.11 (Marine Corps Family Advocacy Program)</li>
            <li>• MCO P3040.4E (Marine Corps Casualty Procedures Manual)</li>
            <li>• MCO 6320.2E (Administration of Injured/Ill/Hospitalized Marines)</li>
            <li>• Wounded Warrior Regiment Leaders Guide</li>
          </ul>
        </div>
      </div>

      {/* UPFRP */}
      <CollapsibleSection
        title="Unit, Personal and Family Readiness Program (UPFRP)"
        icon={<Home className="h-5 w-5" />}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-l-amber-500 bg-white p-4 shadow-sm dark:bg-zinc-800">
              <div className="flex items-center gap-2">
                <TimelineBadge time="30 Days" />
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Command Team Training
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Attend with your Family Readiness Command Team. <Acronym title="Family Readiness Officer">FRO</Acronym> coordinates through{" "}
                <Acronym title="Marine Corps Family Team Building">MCFTB</Acronym>.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-l-blue-500 bg-white p-4 shadow-sm dark:bg-zinc-800">
              <div className="flex items-center gap-2">
                <TimelineBadge time="60 Days" />
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Publish <Acronym title="Unit, Personal and Family Readiness Program">UPFRP</Acronym> SOP
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Outline roles and responsibilities specific to your unit. Colonel-level commands include{" "}
                <Acronym title="Deployment Readiness Coordinator">DRC</Acronym>/<Acronym title="Unit Readiness Coordinator">URC</Acronym> roles.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-l-purple-500 bg-white p-4 shadow-sm dark:bg-zinc-800">
              <div className="flex items-center gap-2">
                <TimelineBadge time="90 Days" />
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  <Acronym title="Marine Corps Community Services">MCCS</Acronym> Brief
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Request brief from supporting MCCS representative on local functions supporting UPFRP.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Family Readiness Officer (FRO)
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Coordinates family readiness programs</li>
                <li>Serves as liaison between command and families</li>
                <li>Coordinates with installation resources</li>
                <li>Schedules Command Team Training through MCFTB</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Deployment Readiness Coordinator (DRC)
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Personal and family readiness communication link</li>
                <li>Available at departing and receiving commands</li>
                <li>Assists family transition with resources and support</li>
                <li>Supports warm handoff during <Acronym title="Permanent Change of Station">PCS</Acronym></li>
              </ul>
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
            FRO schedules through Marine Corps Family Team Building (MCFTB).
          </InfoCard>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Required Attendees
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Commanding Officer</li>
                <li>Executive Officer</li>
                <li>Sergeant Major / Senior Enlisted Leader</li>
                <li>Chaplain</li>
                <li>Family Readiness Officer</li>
                <li>Single Marine Representative</li>
                <li>CO / Senior Enlisted spouse</li>
                <li>Command Team Advisor</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Training Content
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Family readiness requirements</li>
                <li>Available resources</li>
                <li>Roles and responsibilities</li>
                <li>Communication strategies</li>
                <li>Deployment support</li>
                <li>Crisis response</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* FAP */}
      <CollapsibleSection
        title="Family Advocacy Program (FAP)"
        icon={<Shield className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <InfoCard title="Commander Training Requirement" variant="warning">
            All commanders shall be trained on prevention and response to child abuse and domestic
            abuse. Complete within <strong>90 days</strong> of assuming command. Reference: MCO 1754.11
          </InfoCard>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <Acronym title="Family Advocacy Program">FAP</Acronym> Mission
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Prevent and reduce family violence</li>
                <li>Ensure coordinated community response</li>
                <li>Provide 24/7 victim advocacy services</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                FAP Services
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Prevention education</li>
                <li>Review and determination of alleged abuse</li>
                <li>Clinical treatment for at-risk families</li>
                <li>Home visits through New Parent Support Program</li>
                <li>Case management</li>
                <li>24/7 victim advocacy</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Prevention Programs Available
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Period of PURPLE Crying
                </div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  Coping strategies for caregivers of infants with constant crying
                </div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Nurturing Parenting Program
                </div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  Bonding, attachment, relational skills
                </div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Positive Parenting Program (Triple P)
                </div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  Intervention for children with behavioral issues
                </div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  STOP Program
                </div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  Skills, Techniques, Options, Plans - for identified aggressors
                </div>
              </div>
            </div>
          </div>

          <InfoCard title="Key Point: SAPR vs FAP" variant="danger">
            Sexual assault against a spouse is a <strong>FAP case, not SAPR</strong>. Refer appropriately.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* WII Marine Care */}
      <CollapsibleSection
        title="Wounded, Ill, and Injured (WII) Marine Care"
        icon={<Heart className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Wounded Warrior Regiment (<Acronym title="Wounded Warrior Regiment">WWR</Acronym>) Overview
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Official Marine Corps command providing leadership and facilitating integration of
              non-medical and medical care. Serves combat and non-combat <Acronym title="Wounded, Ill, and Injured">WII</Acronym> Marines, attached
              Sailors, and families.
            </p>
            <div className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              <div>• Headquarters at Quantico, VA</div>
              <div>• <Acronym title="Wounded Warrior Battalion">WWBn</Acronym>-East at Camp Lejeune, NC</div>
              <div>• WWBn-West at Camp Pendleton, CA</div>
              <div>• Multiple detachments at <Acronym title="Military Treatment Facility">MTF</Acronym>s and VA Centers</div>
            </div>
          </div>

          <InfoCard title="Key Principle" variant="info">
            Nearly 50% of Marines supported by WWR remain assigned to their parent command. The goal
            is to keep Marines with their units as long as the unit can meet their recovery care
            needs.
          </InfoCard>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              WWR Referral Criteria
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Marines meeting any of the following should be referred to WWR:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Seriously or Very Seriously Ill/Injured</li>
              <li>Catastrophically wounded/injured</li>
              <li>Requires extensive medical care and rehabilitation</li>
              <li>Complex medical and non-medical needs</li>
              <li>Long-term Limited Duty (<Acronym title="Limited Duty">LIMDU</Acronym>) expected</li>
              <li>Referred to Integrated Disability Evaluation System (<Acronym title="Integrated Disability Evaluation System">IDES</Acronym>)</li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-l-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
              <div className="font-semibold text-blue-700 dark:text-blue-400">
                Referral Contacts
              </div>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>WWBn-East:</strong> WWBN_East_S3@usmc.mil</li>
                <li><strong>WWBn-West:</strong> WWBnWestOperations@usmc.mil</li>
                <li><strong>If unsure:</strong> SMBWWROpsCenter@usmc.mil</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
              <div className="font-semibold text-rose-700 dark:text-rose-400">
                Sgt Merlin German Call Center
              </div>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>Phone:</strong> 1-877-487-6299</li>
                <li>Available 24/7/365</li>
                <li>Supports active duty and veteran WII Marines</li>
                <li>Assists with benefits, employment, education, housing</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Commander's Checklist for WII Marines */}
      <CollapsibleSection
        title="Commander's Checklist for WII Marines Not Assigned to WWR"
        icon={<FileText className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Even if a Marine does not meet WWR assignment criteria, they still require support.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">1</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Designate Unit Representative
                </span>
              </div>
              <p className="mt-2 ml-8 text-sm text-zinc-700 dark:text-zinc-300">
                Per MCO P1900.16, Chapter 8. Oversee WII Marine&apos;s recovery. Liaise with MTF and
                WWR as required. Example: LIMDU Coordinator.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">2</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Establish MTF Liaison
                </span>
              </div>
              <p className="mt-2 ml-8 text-sm text-zinc-700 dark:text-zinc-300">
                Ensure prompt and correct information for Personnel Casualty Reports (<Acronym title="Personnel Casualty Report">PCR</Acronym>). PCR
                reporting is continuous for <Acronym title="Seriously Injured">SI</Acronym> and <Acronym title="Very Seriously Injured">VSI</Acronym> until upgraded or returns to full duty.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">3</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Submit Supplemental PCRs
                </span>
              </div>
              <ul className="mt-2 ml-8 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Every <strong>7 days</strong> (Progress Report)</li>
                <li>Marine&apos;s casualty status changes (e.g., SI to VSI)</li>
                <li>Transfer to another MTF</li>
                <li>Arrival at destination MTF</li>
                <li>Discharge from MTF (including convalescent leave)</li>
                <li>Final PCR: State &quot;THIS IS A FINAL PCR&quot; in remarks</li>
              </ul>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">4</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Support Family Travel
                </span>
              </div>
              <p className="mt-2 ml-8 text-sm text-zinc-700 dark:text-zinc-300">
                If family is not local and Marine is SI or VSI inpatient, up to 3 designated
                individuals can travel on Invitational Travel Orders (<Acronym title="Invitational Travel Orders">ITO</Acronym>s). Contact Casualty
                Branch: <strong>1-800-847-1597</strong>
              </p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">5</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Request Recovery Care Coordinator (<Acronym title="Recovery Care Coordinator">RCC</Acronym>)
                </span>
              </div>
              <p className="mt-2 ml-8 text-sm text-zinc-700 dark:text-zinc-300">
                Assists Marine in navigating recovery and planning for future. Contact WWR to
                request RCC assignment.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">6</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Ensure Benefits and Pay
                </span>
              </div>
              <ul className="mt-2 ml-8 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong><Acronym title="Traumatic Servicemembers' Group Life Insurance">TSGLI</Acronym>:</strong> For traumatic injuries (not limited to combat)</li>
                <li><strong><Acronym title="Pay and Allowance Continuation">PAC</Acronym>:</strong> For hospitalization from combat zone wounds</li>
                <li><strong><Acronym title="Special Compensation for Assistance with Activities of Daily Living">SCAADL</Acronym>:</strong> Special compensation for primary caregiver</li>
                <li><strong>Social Security Disability Insurance:</strong> May be available while on active duty</li>
              </ul>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">7</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Recognition
                </span>
              </div>
              <p className="mt-2 ml-8 text-sm text-zinc-700 dark:text-zinc-300">
                Ensure WII Marines receive recognition they deserve. Submit Purple Heart, Combat
                Action Ribbon, and other awards. Recognition improves morale and supports promotion.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-white">8</span>
                <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Performance Documentation
                </span>
              </div>
              <p className="mt-2 ml-8 text-sm text-zinc-700 dark:text-zinc-300">
                Fitness reports and pros/cons are often overlooked for WII personnel. Ensure no date
                gaps or missing marks.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* ITOs and NMA */}
      <CollapsibleSection
        title="Invitational Travel Orders (ITOs) and Non-Medical Attendant"
        icon={<Plane className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Invitational Travel Orders (ITOs)
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Government-funded orders authorizing up to 3 persons designated by Marine to travel
                to medical facility.
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>VSI/SI:</strong> One round-trip per 60 days</li>
                <li><strong><Acronym title="Not Seriously Injured">NSI</Acronym>:</strong> 30-day max stay if hospitalized from combat zone</li>
                <li>No time deadline for ITO reimbursement</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Non-Medical Attendant (<Acronym title="Non-Medical Attendant">NMA</Acronym>)
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Individual designated by WII Marine to assist with activities of daily living.
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Must be authorized by attending physician</li>
                <li>Must be approved by military medical facility commander</li>
                <li>Not more than two round-trips per 60 days</li>
                <li>Orders through WWR: <strong>703-784-3694/3689</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* IDES */}
      <CollapsibleSection
        title="Integrated Disability Evaluation System (IDES)"
        icon={<FileText className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <InfoCard title="When Marine is Referred to IDES" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Care does <strong>NOT</strong> stop</li>
              <li>Marine still has access to healthcare</li>
              <li>Treatment continues as recommended by medical authority</li>
            </ul>
          </InfoCard>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Responsibilities
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Provide <Acronym title="Physical Evaluation Board Liaison Officer">PEBLO</Acronym> a non-medical assessment within <strong>5 calendar days</strong></li>
                <li>NMA assesses Marine&apos;s ability to perform current job</li>
                <li>Failure to submit timely NMA delays IDES progress</li>
                <li>If Line of Duty determination required, provide complete investigation within 5 days</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Key Personnel
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>PEBLO:</strong> Non-medical case management specialist providing assistance and information</li>
                <li><strong>VA Military Service Coordinator (<Acronym title="Military Service Coordinator">MSC</Acronym>):</strong> Coordinates with DoD, VA, and SSA</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Casualty Affairs */}
      <CollapsibleSection
        title="Casualty Affairs"
        icon={<Users className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Personnel Casualty Report (PCR) Requirements
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Parent Command submits PCRs per MCO P3040.4E for all casualties (not limited to
              combat) and extended injury or illness (e.g., cancer).
            </p>
            <div className="mt-3">
              <div className="text-sm font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                PCR Submission Occasions:
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Every 7 days: Progress Report</li>
                <li>Status change (SI to VSI, etc.)</li>
                <li>Transfer to another MTF</li>
                <li>Arrival at destination MTF</li>
                <li>Discharge from MTF</li>
                <li>Final PCR when returned to duty or separated</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Casualty Status Categories
              </div>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                Only medical professionals determine status:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Good, Fair, Serious, Critical, Undetermined</li>
                <li><strong>VSI:</strong> Very Seriously Injured</li>
                <li><strong>SI:</strong> Seriously Injured</li>
                <li><strong>NSI:</strong> Not Seriously Injured</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <Acronym title="Casualty Assistance Calls Officer">CACO</Acronym> Duties
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Notification of Next of Kin (<Acronym title="Next of Kin">NOK</Acronym>)</li>
                <li>Assistance with benefits and entitlements</li>
                <li>Support during funeral arrangements</li>
                <li>Ongoing family support</li>
              </ul>
            </div>
          </div>

          <InfoCard title="CCIR Consideration" variant="warning">
            Missed <Acronym title="Military Funeral Honors">MFH</Acronym>/CACO calls, tardy arrival, incomplete ceremonies, or complaints should be
            reported per command CCIR guidance.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Important Things to Know
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <InfoCard title="Family Readiness Affects Unit Readiness" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Separation from family is associated with increased stress and suicide risk</li>
              <li>Marines with family challenges cannot focus on mission</li>
              <li>Proactive family support prevents crises</li>
            </ul>
          </InfoCard>

          <InfoCard title="Transitions Are High-Risk Periods" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>PCS moves stress families</li>
              <li>Use DRCs at both departing and receiving commands</li>
              <li>Ensure warm handoff through Marine Corps Sponsorship Program</li>
            </ul>
          </InfoCard>

          <InfoCard title="WII Marines Remaining with Unit" variant="tip">
            <ul className="list-inside list-disc space-y-1">
              <li>WWR provides support even if Marine stays with parent command</li>
              <li>Contact WWR for RCC assignment</li>
              <li>Use WWBn Contact Centers for immediate support</li>
            </ul>
          </InfoCard>

          <InfoCard title="PCRs Are Not Just for Combat" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Submit PCR for any extended injury or illness</li>
              <li>Cancer, serious accidents, and chronic conditions require PCRs</li>
              <li>Reporting ensures proper tracking and family support</li>
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
              Problem: Marine&apos;s family struggling during deployment but Marine unaware
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Use FRO and DRC to maintain communication with families.
              Ensure families know how to reach command. Connect families with installation resources
              proactively.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: WII Marine&apos;s paperwork delayed, affecting benefits
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Designate unit representative to track paperwork. Submit
              PCRs on schedule. Contact WWR S-1 for immediate resolution of administrative
              roadblocks.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: TSGLI application incomplete or delayed
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> For help completing TSGLI application, contact Sgt Merlin
              German Wounded Warrior Call Center: <strong>1-877-487-6299</strong>. TSGLI qualifying
              injuries not limited to combat.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Commander unsure if Marine meets WWR assignment criteria
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> When in doubt, send referral to SMBWWROpsCenter@usmc.mil.
              WWR will assess and provide guidance. Marines can receive WWR support without formal
              assignment.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Gaps in fitness reports for WII Marine
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Fitness reports and pros/cons are often overlooked. Ensure
              no date gaps. Performance documentation supports promotion and benefits.
            </div>
          </div>
        </div>
      </div>

      {/* Key Links */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Key Links
        </h2>

        <div className="mt-4 space-y-4">
          <div>
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Family Programs
            </div>
            <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={FAMILY_URLS.MCCS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
              >
                <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">Marine and Family Programs</span>
              </a>
              <a
                href={FAMILY_URLS.MILITARY_ONESOURCE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
              >
                <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">Military OneSource</span>
              </a>
              <div className="flex items-center gap-2 rounded-lg border border-black/10 p-3 dark:border-white/10">
                <Phone className="h-4 w-4 text-rose-500" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">DV Hotline: 1-800-799-SAFE</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Wounded Warrior Support
            </div>
            <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={FAMILY_URLS.WOUNDED_WARRIOR_ORG}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
              >
                <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">Wounded Warrior Regiment</span>
              </a>
              <div className="flex items-center gap-2 rounded-lg border border-black/10 p-3 dark:border-white/10">
                <Phone className="h-4 w-4 text-[var(--sa-gold)]" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">Sgt German Call Center: 1-877-487-6299</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-black/10 p-3 dark:border-white/10">
                <Phone className="h-4 w-4 text-[var(--sa-gold)]" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">Casualty Branch (ITOs): 1-800-847-1597</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <InfoCard title="This Is Leadership Responsibility" variant="success">
        Family readiness is unit readiness. Your proactive engagement with family programs, visible
        support for WII Marines, and proper execution of casualty affairs demonstrates the Marine
        Corps commitment to taking care of its own. These are not administrative burdens—they are
        leadership responsibilities.
      </InfoCard>
    </div>
  );
}
