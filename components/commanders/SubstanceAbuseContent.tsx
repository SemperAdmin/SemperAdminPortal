"use client";

import { useState } from "react";
import { Acronym } from "../ui/Acronym";
import { SAPR_URLS, FAMILY_URLS, MENTAL_HEALTH_URLS } from "../../data/references";
import {
  ChevronDown,
  ChevronRight,
  Shield,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Info,
  ExternalLink,
  UserCheck,
  FlaskConical,
  ClipboardList,
  RefreshCw,
  AlertCircle,
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

function PremiseCodeCard({
  code,
  name,
  description,
}: {
  code: string;
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
      <div className="flex items-center gap-2">
        <span className="rounded bg-[var(--sa-navy)] px-2 py-0.5 text-xs font-bold text-white">
          {code}
        </span>
        <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {name}
        </span>
      </div>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

export function SubstanceAbuseContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white">
        <h1 className="text-3xl font-bold">Substance Abuse and Urinalysis</h1>
        <p className="mt-2 text-lg text-zinc-200">
          Prevention, deterrence, testing, treatment, and rehabilitation
        </p>
      </div>

      {/* Overview */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Overview
        </h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Substance abuse directly impacts unit readiness, safety, and mission accomplishment. As a
          commander, you are responsible for maintaining a drug-free unit through prevention,
          deterrence, and intervention. <strong>Drug use is a core values break.</strong> Your
          visible commitment to standards and aggressive enforcement sends a clear message to
          Marines about what you will and will not tolerate.
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          The Marine Corps Substance Abuse Program provides a full spectrum of services: prevention
          and education, deterrent activities (urinalysis and alcohol screening), intervention,
          treatment, and aftercare. Your role is to set the climate, ensure compliance with testing
          requirements, and make appropriate decisions when Marines test positive or need treatment.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key References
          </h3>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            <li>• MCO 5300.17A (Marine Corps Substance Abuse Program)</li>
            <li>• DoDI 1010.01 (Military Personnel Drug Abuse Testing Program)</li>
            <li>• DoDI 1010.16 (Technical Procedures for Drug Abuse Testing)</li>
          </ul>
        </div>
      </div>

      {/* Testing Requirements Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border-l-4 border-l-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-blue-700 dark:text-blue-400">Monthly</span>
          </div>
          <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            At least <strong>10%</strong> of population (random)
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-l-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-950/20">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="font-bold text-emerald-700 dark:text-emerald-400">Annual</span>
          </div>
          <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>100%</strong> of Marines regardless of rank
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4 dark:bg-amber-950/20">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <span className="font-bold text-amber-700 dark:text-amber-400">New Joins</span>
          </div>
          <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Within <strong>72 hours</strong> of arrival
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-l-purple-500 bg-purple-50 p-4 dark:bg-purple-950/20">
          <div className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="font-bold text-purple-700 dark:text-purple-400">SACO/UPC</span>
          </div>
          <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Monthly (separate batch)
          </div>
        </div>
      </div>

      {/* SACO */}
      <CollapsibleSection
        title="Substance Abuse Control Officer (SACO)"
        icon={<UserCheck className="h-5 w-5" />}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Appointment Requirements
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Appoint a SNCO in writing</li>
                <li>Appointment should be for at least <strong>one year</strong></li>
                <li>At least one year remaining before PCS or <Acronym title="End of Active Service">EAS</Acronym></li>
                <li>Will NOT currently engage in high-risk alcohol use</li>
                <li>Will NOT use illegal drugs or have recent substance incidents</li>
                <li>If previous alcohol problem, must have 2 years sobriety</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
              <div className="font-semibold text-rose-700 dark:text-rose-400">
                Disqualifications
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Cannot serve as <Acronym title="Unit Prevention Coordinator">UPC</Acronym> or observer for same testing event</li>
                <li>Cannot be appointed if currently serving as <Acronym title="SAPR Victim Advocate">SAPR VA</Acronym></li>
                <li>Must complete HQMC-approved <Acronym title="Substance Abuse Control Officer">SACO</Acronym> course</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              SACO Responsibilities (per MCO 5300.17)
            </div>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Advise commander on all substance-related matters
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Ensure annual substance abuse prevention education
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Display prevention materials in common areas
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Ensure compliance with urinalysis requirements
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Prepare drug testing determination memos for CO
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                View and print drug test results
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Inform commander of drug test results
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Oversee unit Alcohol Screening Program (<Acronym title="Alcohol Screening Program">ASP</Acronym>)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Conduct monthly random breathalyzer testing
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                Maintain files per SACO guidance on Gear Locker
              </li>
            </ul>
          </div>

          <InfoCard title="SACO as Advisor" variant="tip">
            <ul className="list-inside list-disc space-y-1">
              <li>Advise CO on any suspicions of drug use within unit</li>
              <li>Remind CO of requirements (e.g., testing new joins within 72 hours)</li>
              <li>Discuss best approach when specific Marine is suspected of drug use</li>
              <li>Ensure CO compliance with MCO 5300.17 for CO&apos;s own protection</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* UPC and Observers */}
      <CollapsibleSection
        title="Unit Prevention Coordinator (UPC) and Observers"
        icon={<Users className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Unit Prevention Coordinator (UPC)
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Executes the command&apos;s urinalysis testing event. Primary duty is collection,
                not oversight (that is SACO&apos;s role).
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Designated in writing by commander</li>
                <li>Cannot serve as SACO or observer during same event</li>
                <li>Must complete HQMC-approved course before collection</li>
                <li>Execute urinalysis collection per procedures</li>
                <li>Maintain urinalysis ledger documenting all specimens</li>
                <li>Initial specimen collection bottle labels</li>
                <li>Ensure proper chain of custody</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Observers
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Commander shall individually designate observers in writing.
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Cannot serve as SACO or UPC during same event</li>
                <li>Must maintain full observation of specimen bottle</li>
                <li>Must sign for <strong>every</strong> observation (not all at once)</li>
                <li>Trained prior to performing duties</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Who Directs Testing" variant="warning">
            <strong>Only commanders and Medical Officers (MOs) can direct that a urine sample be
            taken.</strong> No other authority can order urinalysis. This ensures proper legal basis
            for testing.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Premise Codes */}
      <CollapsibleSection
        title="Urinalysis Premise Codes"
        icon={<ClipboardList className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Premise codes identify the basis for testing. The code matters for legal use of results.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <PremiseCodeCard
              code="IR"
              name="Random"
              description="Random selection from unit population"
            />
            <PremiseCodeCard
              code="IO"
              name="Command-Directed"
              description="Probable cause - commander has reasonable suspicion based on specific facts"
            />
            <PremiseCodeCard
              code="CO"
              name="Consent"
              description="Marine voluntarily consents to testing"
            />
            <PremiseCodeCard
              code="RO"
              name="Rehabilitation"
              description="Testing during substance abuse treatment program"
            />
            <PremiseCodeCard
              code="VO"
              name="Medical"
              description="Competency for duty or fitness for duty determination"
            />
            <PremiseCodeCard
              code="UO"
              name="Unit Sweep/Inspection"
              description="Commander's inspection authority"
            />
            <PremiseCodeCard
              code="00"
              name="Service-Directed"
              description="Directed by SECNAV or CMC for SACC personnel, security, reenlistments, PCS arrivals"
            />
          </div>

          <InfoCard title="Random Testing Best Practice" variant="tip">
            No Marines excluded from current testing regardless of proximity of previous testing.
            Testing dates randomly selected. <strong>Unpredictability enhances deterrence.</strong>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Collection Procedures */}
      <CollapsibleSection
        title="Collection and Chain of Custody"
        icon={<FlaskConical className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              DD Form 2624 (Specimen Custody Document)
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Documents each batch submitted for testing</li>
              <li>UPC/SACO enters shipment mode in Block 12(d)</li>
              <li><strong>Chain of custody is critical for evidentiary use</strong></li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Shipment Options
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Released to USPS (registered mail not recommended)</li>
                <li>Hand-carry to drug screening laboratory</li>
                <li>Collection point coordinator for multiple commands</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Specimen Handling
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>No refrigeration or freezing required</li>
                <li>Forward expeditiously</li>
                <li>Maintain incontestable security and chain of custody</li>
                <li>All specimens collected must be shipped for testing</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Chain of Custody is Critical" variant="danger">
            <ul className="list-inside list-disc space-y-1">
              <li>Proper documentation enables evidentiary use</li>
              <li>Faulty chain of custody can invalidate results</li>
              <li>UPC must maintain urinalysis ledger</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Positive Results */}
      <CollapsibleSection
        title="Positive Results and Command Confirmation"
        icon={<AlertTriangle className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              When Results Come Back Positive
            </div>
            <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li><Acronym title="Drug Demand Reduction Coordinator">DDRC</Acronym> informs <Acronym title="Medical Officer">MO</Acronym> of all positive prescription drug results</li>
              <li>MO conducts review to determine &quot;legitimate&quot; or &quot;non-legitimate&quot; use</li>
              <li>DDRC notifies unit commander of MO determination</li>
              <li>DDRC records determination in <Acronym title="Internet Forensic Toxicology Drug Testing Laboratory">IFTDTL</Acronym> Portal</li>
            </ol>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Confirmation Process
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Commander determines if positive result involved:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Administrative error (faulty chain of custody)</li>
                <li>Evidence of tampering</li>
                <li>Legitimate use (prescribed medication)</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-950/20">
              <div className="font-semibold text-emerald-700 dark:text-emerald-400">
                If Administrative Error or Legitimate Use
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Marine shall NOT be identified as drug abuser</li>
                <li>Positive urinalysis is NOT a drug-related incident</li>
                <li>No administrative or disciplinary action taken</li>
                <li>No documentation of case retained</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Command Confirmation Memo" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Provide results of every command confirmation via memo to installation DDRC/<Acronym title="Substance Abuse Counseling Center">SACC</Acronym></li>
              <li>DDRC/SACC enters results into IFTDTL database</li>
              <li>Maintain command confirmation memos for <strong>two years</strong> following last entry</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* SACC and Treatment */}
      <CollapsibleSection
        title="SACC Services and Treatment"
        icon={<Shield className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <Acronym title="Substance Abuse Counseling Center">SACC</Acronym> Mission
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Provide individualized, evidence-informed services supporting prevention,
                intervention, and treatment.
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Counseling for Substance Use Disorders (<Acronym title="Substance Use Disorder">SUD</Acronym>s)</li>
                <li>Addresses alcohol, illicit drugs, prescription drug misuse</li>
                <li>Also addresses relationships, stress, emotional regulation</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Access to <Acronym title="Substance Abuse Program">SAP</Acronym> Services
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Command referral</li>
                <li>Other program referral</li>
                <li>Self-referral</li>
              </ul>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                SAP collaborates with <Acronym title="Community Counseling Program">CCP</Acronym> and <Acronym title="Family Advocacy Program">FAP</Acronym>. Warm hand-offs between programs.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Treatment Options
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Outpatient counseling through SACC</li>
              <li>Intensive outpatient programs</li>
              <li>Inpatient treatment (Navy Bureau of Medicine coordination)</li>
              <li>Aftercare following treatment</li>
            </ul>
          </div>

          <InfoCard title="Important: SACC Makes Assessments, Not Diagnoses" variant="warning">
            Per DoDIG guidance, diagnostic capabilities removed from SACC scope. SACC assesses
            appropriate level of care and coordinates with medical for clinical treatment needs.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Reintegration */}
      <CollapsibleSection
        title="Reintegration After Treatment"
        icon={<RefreshCw className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Following In-Patient Treatment for Substance Misuse
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Ensure Marine connects with local resources for follow-up care</li>
              <li>Communicate to unit about importance of seeking help and returning to the fight</li>
              <li>Make reintegration a continuous process</li>
              <li>Set positive command climate for seeking help</li>
              <li>Communicate respect, trust, and sense of belonging</li>
              <li>Help Marine refocus on mission and rebuild confidence</li>
              <li>Give meaningful work assignments</li>
              <li>Encourage non-substance related unit activities</li>
              <li>Update <Acronym title="Force Preservation Council">FPC</Acronym> and <Acronym title="Command Individual Risk and Resiliency Assessment System">CIRRAS</Acronym></li>
            </ul>
          </div>

          <InfoCard title="Key Point" variant="danger">
            Reintegration reduces stigma and supports readiness. <strong>Periods of transition
            (including returning from treatment) put individuals at higher risk for suicide-related
            events.</strong>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Continued Service and Discharge */}
      <CollapsibleSection
        title="Continued Service and Discharge"
        icon={<FileText className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Discretion
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Positive urinalysis does not automatically mean separation.
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Consider circumstances, Marine&apos;s record, potential for rehabilitation</li>
                <li>Consult with <Acronym title="Staff Judge Advocate">SJA</Acronym> on appropriate action</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Options
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><Acronym title="Non-Judicial Punishment">NJP</Acronym> with rehabilitation program</li>
                <li>Administrative separation processing</li>
                <li>Court-martial for serious cases</li>
                <li>Retention with treatment (rare circumstances)</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Drug Use as Core Values Break" variant="danger">
            <ul className="list-inside list-disc space-y-1">
              <li>Drug use violates Honor, Courage, Commitment</li>
              <li>Failure to address aggressively is seen as condoning</li>
              <li>What you do not say is as powerful as what you say</li>
              <li><strong>Marines generally know who drug users are—they wait for you to act</strong></li>
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
          <InfoCard title="IFTDTL Portal" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Internet Forensic Toxicology Drug Testing Laboratory</li>
              <li>Web-based system for results and reports</li>
              <li>SACO must log in at least once every <strong>30 days</strong> or account disabled</li>
            </ul>
          </InfoCard>

          <InfoCard title="Prevention Materials" variant="tip">
            <ul className="list-inside list-disc space-y-1">
              <li>Display in common areas (CGI requirement)</li>
              <li>Update with current information on trending drugs</li>
              <li>Use SAMHSA and DoD resources</li>
            </ul>
          </InfoCard>

          <InfoCard title="Training Codes" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li><strong><Acronym title="Unit Marine Awareness and Prevention Integrated Training">UMAPIT</Acronym>:</strong> Code &quot;B9&quot; in <Acronym title="Marine Corps Total Force System">MCTFS</Acronym></li>
              <li><strong>Breathalyzer events:</strong> Code &quot;A7&quot; in <Acronym title="Marine Corps Training Information Management System">MCTIMS</Acronym></li>
            </ul>
          </InfoCard>

          <InfoCard title="Alcohol Screening Program (ASP)" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Conduct monthly random breathalyzer testing</li>
              <li>Marines identified for random urinalysis also participate</li>
              <li>SACO oversees ASP</li>
              <li>ASP Coordinators appointed in writing, trained before conducting</li>
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
              Problem: CO wants to delay testing new joins during high operational tempo
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Remind CO that testing within 72 hours is required by MCO
              5300.17. This protects CO, Marine, and unit. No exceptions.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Chain of custody questions arise during legal proceedings
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Maintain meticulous documentation. UPC ledger, DD Form
              2624, observer signatures must all be complete. Faulty chain of custody invalidates
              results.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Marine tests positive for prescription medication they claim was prescribed
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> MO conducts review. Marine provides prescription
              documentation. If legitimate, no drug-related incident. If no valid prescription or
              abuse of prescription, treat as positive.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Uncertainty about premise code for testing
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Consult SACO and SJA. Premise code matters for legal use of
              results. Random (IR) is default. Command-directed (IO) requires documented probable
              cause.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Rumors of drug use but no specific facts
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Increase random testing. Do not conduct command-directed
              testing without specific facts constituting probable cause. Consult SJA.
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
            href={SAPR_URLS.GEAR_LOCKER}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Gear Locker (SACO Guidance)</span>
          </a>
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
            href={MENTAL_HEALTH_URLS.DSTRESS_LINE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">DSTRESS Line: 1-877-476-7734</span>
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
        </div>

        <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
          <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Systems
          </div>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li>• IFTDTL Portal (Results and Reports) - CAC required</li>
            <li>• MCTFS (Training Codes)</li>
            <li>• MCTIMS (Breathalyzer Events)</li>
          </ul>
        </div>
      </div>

      {/* Final Note */}
      <InfoCard title="What You Tolerate, You Encourage" variant="success">
        Drug use is incompatible with military service. Your aggressive enforcement of standards and
        visible commitment to a drug-free unit protects readiness and demonstrates to Marines that
        you uphold the values they pledged to serve.
      </InfoCard>
    </div>
  );
}
