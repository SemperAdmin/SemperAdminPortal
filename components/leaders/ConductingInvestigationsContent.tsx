"use client";

import React, { useState } from "react";
import { Breadcrumb } from "../ui/Breadcrumb";
import {
  FileSearch,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  BookOpen,
  Clock,
  Users,
  FileText,
  Shield,
  Scale,
  Gavel,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Phone,
  HelpCircle,
  ClipboardList,
  UserCheck,
  Heart,
  Camera,
  MessageSquare,
  Search,
  PenTool,
  ListChecks,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { InfoCard } from "../ui/InfoCard";

/* ─────────────────────────────────────────────────────────── */
/*  Local Helper Components                                    */
/* ─────────────────────────────────────────────────────────── */

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "danger" | "success" | "tip";
}
interface CollapsibleSectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ icon: Icon, title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sa-navy)]/10 text-[var(--sa-navy)] dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-zinc-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        )}
      </button>
      {isOpen && <div className="border-t border-black/5 p-4 dark:border-white/10">{children}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                             */
/* ─────────────────────────────────────────────────────────── */

export function ConductingInvestigationsContent() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Leaders", href: "/roles/leaders" },
    { label: "Conducting Administrative Investigations" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
            <FileSearch className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Conducting Administrative Investigations</h1>
            <p className="mt-2 text-lg text-white/90">
              Step-by-step guidance for investigating officers on preliminary inquiries, command investigations, and investigation report writing
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overview</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          As an investigating officer (IO), you are responsible for searching out, discovering, collecting, and preserving evidence to document a matter of official interest to your command. Your investigation must be thorough, accurate, and timely. A poorly conducted investigation wastes resources, fails to protect the interests of the command and individuals involved, and creates problems for commanders who must act on your findings.
        </p>
        <div className="mt-4">
          <InfoCard icon={AlertTriangle} title="Before You Begin" variant="warning">
            <p>Contact your command&apos;s judge advocate or the Region Legal Service Office (RLSO) for guidance before starting any investigation.</p>
          </InfoCard>
        </div>
        <div className="mt-4">
          <a
            href="https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/5800.7G_CH-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--sa-navy)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--sa-navy)]/80"
          >
            <ExternalLink className="h-4 w-4" />
            JAGINST 5800.7G CH-2 (JAGMAN Chapter II)
          </a>
        </div>
      </div>

      {/* Before You Start Any Investigation */}
      <CollapsibleSection icon={BookOpen} title="Before You Start Any Investigation" defaultOpen={true}>
        <div className="space-y-6">
          {/* Step 1: Review Convening Order */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">1</span>
              Review Your Convening Order
            </h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Your convening order is your roadmap. Read it carefully. It should tell you:
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Specific purposes of the investigation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Scope of your inquiry
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Issues you must address
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Witnesses and sources to contact
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Format for your report (normally letter format)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Whether opinions/recommendations required
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Due date (normally 30 calendar days)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Any special instructions
              </li>
            </ul>
            <div className="mt-3">
              <InfoCard icon={Lightbulb} title="Tip" variant="tip">
                If your convening order is unclear, ask the Convening Authority for clarification before you begin.
              </InfoCard>
            </div>
          </div>

          {/* Step 2: Contact Judge Advocate */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">2</span>
              Contact a Judge Advocate
            </h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Do this immediately. A judge advocate helps you:
            </p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Understand requirements and scope
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Identify legal issues
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Ensure proper warnings are given
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Avoid common mistakes
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                Format your report correctly
              </li>
            </ul>
            <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
              <h4 className="flex items-center gap-2 font-semibold text-blue-800 dark:text-blue-200">
                <Phone className="h-4 w-4" />
                Contacts for Guidance
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>• Command Judge Advocate</li>
                <li>• Region Legal Service Office (RLSO) Command Services Department</li>
                <li>• OJAG Administrative Law Division (Code 13): DSN 224-7415 or 703-614-7415</li>
                <li>• HQMC Research and Civil Law Division (Code JAR): 703-614-2510 or DSN 224-2510</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Coordinate */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">3</span>
              Coordinate With Other Investigative Bodies
            </h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Before conducting interviews or collecting evidence, check for pending investigations:
            </p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                NCIS (law enforcement)
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                Naval Safety Center (safety investigations)
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                Inspector General
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                Other commands
              </li>
            </ul>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">If Law Enforcement Investigation Pending</h4>
                <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                  <li>• Coordinate through NCIS</li>
                  <li>• Determine if LE investigation will adequately document the matter</li>
                  <li>• Do not interfere with criminal investigation</li>
                </ul>
              </div>
              <div className="rounded-lg bg-red-50 p-3 dark:bg-red-950/30">
                <h4 className="font-semibold text-red-800 dark:text-red-200">If Safety Investigation Pending</h4>
                <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                  <li>• Do not interfere with safety investigation</li>
                  <li>• Cannot use safety investigation statements</li>
                  <li>• Cannot question witnesses about statements given under promise of confidentiality</li>
                  <li>• If you discover misconduct, immediately notify senior member of safety investigation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Conducting a Preliminary Inquiry */}
      <CollapsibleSection icon={Search} title="Conducting a Preliminary Inquiry">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">Purpose</h3>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                A preliminary inquiry helps the commander determine whether a formal investigation is warranted and what type of investigation is appropriate. It is NOT intended to develop extensive findings of fact. Keep it focused and brief.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
              <h3 className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-200">
                <Clock className="h-4 w-4" />
                Timeline
              </h3>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                Complete within <strong>3 calendar days</strong> of commander learning of the incident. Extensions may be granted for complex matters.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Method</h3>
            <div className="mt-4 space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">1</div>
                <div>
                  <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Gather Basic Facts</h4>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">What happened? When? Where? Who was involved? Who are the witnesses? What evidence exists?</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">2</div>
                <div>
                  <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preserve Evidence</h4>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Secure physical evidence, identify documents, identify witnesses. Do NOT conduct extensive interviews at this stage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">3</div>
                <div>
                  <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Your Findings</h4>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Prepare written summary with basic facts. Recommend whether formal investigation is warranted and what type.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">4</div>
                <div>
                  <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Brief the Commander</h4>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Present findings, discuss options, recommend course of action.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Options After Preliminary Inquiry</h3>
            <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-200 text-xs font-bold dark:bg-zinc-700">1</span>
                Take no further action
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-200 text-xs font-bold dark:bg-zinc-700">2</span>
                Make Line of Duty (LOD) determination only
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-200 text-xs font-bold dark:bg-zinc-700">3</span>
                Convene a command investigation
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-200 text-xs font-bold dark:bg-zinc-700">4</span>
                Convene a litigation-report investigation (judge advocate supervised)
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-200 text-xs font-bold dark:bg-zinc-700">5</span>
                Convene a court or board of inquiry (major incidents)
              </li>
            </ol>
          </div>
        </div>
      </CollapsibleSection>

      {/* Conducting a Command Investigation */}
      <CollapsibleSection icon={FileText} title="Conducting a Command Investigation (Type One)">
        <div className="space-y-6">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Command investigations are the most common type. Use this section when appointed as IO for a command investigation.
          </p>

          {/* Step 1: Plan */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">1</span>
              Plan Your Investigation
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Create an Investigation Plan</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• Review convening order requirements</li>
                  <li>• List all issues you must address</li>
                  <li>• Identify witnesses to interview</li>
                  <li>• Identify documents to collect</li>
                  <li>• Identify physical evidence to examine</li>
                  <li>• Create timeline for completion</li>
                  <li>• Identify resources needed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Organize Your Materials</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• Create investigation folder</li>
                  <li>• Set up tracking system for witnesses contacted</li>
                  <li>• Set up tracking system for evidence collected</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Collect Evidence */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">2</span>
              Collect Evidence
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
                <h4 className="flex items-center gap-2 font-semibold text-blue-800 dark:text-blue-200">
                  <FileText className="h-4 w-4" />
                  Documentary Evidence
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Official records</li>
                  <li>• Logs and journals</li>
                  <li>• Correspondence</li>
                  <li>• Reports</li>
                  <li>• Photographs</li>
                  <li>• Video/audio recordings</li>
                  <li>• Statements</li>
                </ul>
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                  Note source, disclosure restrictions. Obtain originals or authenticated copies.
                </p>
              </div>
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950/30">
                <h4 className="flex items-center gap-2 font-semibold text-green-800 dark:text-green-200">
                  <Shield className="h-4 w-4" />
                  Physical Evidence
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li>• Photograph before disturbing</li>
                  <li>• Maintain chain of custody</li>
                  <li>• Use OPNAV Form 5580/22</li>
                  <li>• Store properly</li>
                  <li>• Document location, condition, handling</li>
                </ul>
              </div>
              <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-950/30">
                <h4 className="flex items-center gap-2 font-semibold text-purple-800 dark:text-purple-200">
                  <Camera className="h-4 w-4" />
                  Photographs & Video
                </h4>
                <p className="mt-2 text-sm text-purple-700 dark:text-purple-300">
                  On reverse side or label, record:
                </p>
                <ul className="mt-1 space-y-1 text-sm text-purple-700 dark:text-purple-300">
                  <li>• Hour and date taken</li>
                  <li>• Location description</li>
                  <li>• Photographer name and rank</li>
                  <li>• Names of persons present</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <InfoCard icon={AlertTriangle} title="Graphic Materials" variant="warning">
                Place in separate envelope marked: &quot;CAUTION, CONTAINS GRAPHIC MATERIAL. VIEWER DISCRETION ADVISED.&quot;
              </InfoCard>
            </div>
          </div>

          {/* Step 3: Interview Witnesses */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">3</span>
              Interview Witnesses
            </h3>
            <div className="mt-4 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">Witnesses NOT Suspected of Misconduct</h4>
                  <p className="mt-2 text-sm text-green-700 dark:text-green-300">Informal interview is appropriate.</p>
                  <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>• Help witness prepare statement but do not tell them what to say</li>
                    <li>• Ensure witness addresses all relevant facts</li>
                    <li>• Help witness exclude irrelevant material</li>
                    <li>• May request sworn statement from military witnesses</li>
                    <li>• Cannot require sworn statement from civilians (but may request)</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                  <h4 className="font-semibold text-red-800 dark:text-red-200">Witnesses SUSPECTED of Misconduct</h4>
                  <p className="mt-2 font-bold text-red-700 dark:text-red-300">STOP. Interview these witnesses LAST.</p>
                  <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                    <li>• Coordinate with judge advocate</li>
                    <li>• Coordinate with NCIS if criminal investigation pending</li>
                    <li>• Consult civilian personnel office if DoD civilian</li>
                  </ul>
                  <div className="mt-3 rounded bg-red-100 p-2 dark:bg-red-900/50">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-200">Required Article 31 Warnings:</p>
                    <ul className="mt-1 space-y-1 text-xs text-red-700 dark:text-red-300">
                      <li>• Right to remain silent</li>
                      <li>• Anything said may be used against them</li>
                      <li>• Right to consult with lawyer</li>
                    </ul>
                  </div>
                </div>
              </div>
              <InfoCard icon={MessageSquare} title="Cautioning Witnesses" variant="info">
                You may direct witnesses subject to Naval authority not to discuss their statements to avoid influencing other witnesses. You may request (but not direct) civilian witnesses not to discuss their statements.
              </InfoCard>
            </div>
          </div>

          {/* Step 4: Analyze Evidence */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">4</span>
              Analyze the Evidence
            </h3>
            <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
              <h4 className="flex items-center gap-2 font-semibold text-blue-800 dark:text-blue-200">
                <Scale className="h-4 w-4" />
                Standard of Proof: Preponderance of the Evidence
              </h4>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                More likely than not (greater than 50%)
              </p>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950/30">
                <h4 className="font-semibold text-green-800 dark:text-green-200">What You CAN Do</h4>
                <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li>• Draw reasonable inferences from evidence</li>
                  <li>• Determine likely chain of events through competent evidence</li>
                </ul>
              </div>
              <div className="rounded-lg bg-red-50 p-3 dark:bg-red-950/30">
                <h4 className="font-semibold text-red-800 dark:text-red-200">What You CANNOT Do</h4>
                <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                  <li>• Speculate on causes</li>
                  <li>• Theorize about thought processes of individuals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5: Write Report */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">5</span>
              Write Your Report
            </h3>
            <div className="mt-4">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Format (Letter Format)</h4>
              <div className="mt-3 space-y-3">
                <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-white p-3 dark:bg-zinc-800">
                  <h5 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Preliminary Statement</h5>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Nature of incident, authority (cite convening order), scope, dates conducted, any limitations or difficulties encountered.</p>
                </div>
                <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-white p-3 dark:bg-zinc-800">
                  <h5 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Findings of Fact</h5>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Numbered paragraphs. Only facts supported by preponderance of evidence. Cite evidence supporting each finding. Arranged in logical order. Include: Who, What, Where, When, How, Why.</p>
                </div>
                <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-white p-3 dark:bg-zinc-800">
                  <h5 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Opinions (if required)</h5>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Numbered paragraphs. Conclusions drawn from findings. Must be supported by your findings. Address specific questions from convening order.</p>
                </div>
                <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-white p-3 dark:bg-zinc-800">
                  <h5 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Recommendations (if required)</h5>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Numbered paragraphs. Actions recommended based on findings and opinions. Be specific and practical.</p>
                </div>
                <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-white p-3 dark:bg-zinc-800">
                  <h5 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Enclosures</h5>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Convening order (first enclosure), witness statements, documentary evidence, photographs, physical evidence documentation. Number all enclosures sequentially.</p>
                </div>
                <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-white p-3 dark:bg-zinc-800">
                  <h5 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">6. Signature</h5>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Sign and date. Include rank and title.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Submit */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">6</span>
              Submit Your Report
            </h3>
            <div className="mt-4">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Submission Checklist</h4>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  All issues in convening order addressed?
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  All findings supported by evidence?
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  All opinions supported by findings?
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  All enclosures properly numbered and referenced?
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  Report signed and dated?
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  Submitted by due date?
                </li>
              </ul>
              <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                Submit to Convening Authority per instructions in convening order.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Litigation-Report Investigation */}
      <CollapsibleSection icon={Gavel} title="Conducting a Litigation-Report Investigation (Type Two)">
        <div className="space-y-4">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Litigation-report investigations are conducted under direction and supervision of a judge advocate. Use when potential claims or litigation exist.
          </p>
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/30">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">Key Differences from Command Investigations</h3>
            <ol className="mt-3 space-y-2 text-sm text-purple-700 dark:text-purple-300">
              <li>1. Conducted under judge advocate direction and supervision</li>
              <li>2. Witness statements taken in specific format</li>
              <li>3. Evidence gathered with litigation in mind</li>
              <li>4. Work product may be protected by attorney-client privilege</li>
              <li>5. Generally not releasable under FOIA</li>
            </ol>
          </div>
          <InfoCard icon={UserCheck} title="Your Role" variant="info">
            <p>Work closely with supervising judge advocate throughout. The judge advocate will provide guidance on evidence collection, direct witness interview procedures, review your work, and help prepare the report. Follow judge advocate instructions carefully. This investigation may be used in court.</p>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Line of Duty/Misconduct Determinations */}
      <CollapsibleSection icon={Scale} title="Line of Duty/Misconduct Determinations">
        <div className="space-y-6">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            If your investigation involves injury, disease, or death, you may need to make LOD/misconduct determinations.
          </p>

          <InfoCard icon={AlertTriangle} title="Required Warning" variant="danger">
            <p>Before obtaining a statement from a service member about the origin of disease or injury for LOD purposes:</p>
            <p className="mt-2 font-semibold">ADVISE THE MEMBER:</p>
            <ul className="mt-1 space-y-1">
              <li>• The statement may be used in determining line of duty</li>
              <li>• The determination may affect entitlements</li>
            </ul>
            <p className="mt-2 text-xs">Use sample warning advisement in JAGMAN Appendix A-2-j.</p>
          </InfoCard>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standards of Proof</h3>
              <div className="mt-3 space-y-3">
                <div>
                  <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LOD Determination</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Preponderance of evidence</p>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Presumptions</h4>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300">
                    <li>• Injury, disease, or death while on active duty is PRESUMED to be in line of duty</li>
                    <li>• Misconduct is NOT presumed (presumption against misconduct)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Possible Findings</h3>
              <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-800 dark:bg-green-900 dark:text-green-200">1</span>
                  In line of duty, not due to own misconduct
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-800 dark:bg-amber-900 dark:text-amber-200">2</span>
                  In line of duty, due to own misconduct
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-100 text-xs font-bold text-orange-800 dark:bg-orange-900 dark:text-orange-200">3</span>
                  Not in line of duty, not due to own misconduct
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-red-100 text-xs font-bold text-red-800 dark:bg-red-900 dark:text-red-200">4</span>
                  Not in line of duty, due to own misconduct
                </li>
              </ol>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
              <h4 className="font-semibold text-green-800 dark:text-green-200">In Line of Duty</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Occurred while member on active duty</li>
                <li>• Not caused by member&apos;s own misconduct</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Not in Line of Duty</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• Incurred during unauthorized absence</li>
                <li>• Result of member&apos;s own misconduct</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Constitutes Misconduct</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Misconduct is conduct that deviates from the standard expected of a reasonable person in like circumstances.
            </p>
            <div className="mt-3">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Examples:</h4>
              <ul className="mt-2 grid gap-1 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
                <li>• Willful negligence</li>
                <li>• Intentional self-inflicted injury</li>
                <li>• Violation of law</li>
                <li>• Intoxication or drug abuse that is the proximate cause</li>
              </ul>
            </div>
            <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200">Intoxication</h4>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                If member was intoxicated at time of injury, there is a presumption that intoxication was the proximate cause. This presumption may be rebutted by evidence.
              </p>
            </div>
          </div>

          <InfoCard icon={HelpCircle} title="Mental Responsibility" variant="info">
            <p>If member was not mentally responsible at time of incident, misconduct cannot be found, even for suicide or attempted suicide. Member is presumed mentally responsible unless evidence establishes otherwise.</p>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Death Case Investigations */}
      <CollapsibleSection icon={Heart} title="Death Case Investigations">
        <div className="space-y-4">
          <InfoCard icon={AlertCircle} title="Death Cases Require Special Attention" variant="danger">
            <ul className="space-y-1">
              <li>• Notify NCIS of deaths under suspicious or unusual circumstances</li>
              <li>• Coordinate with Casualty Affairs</li>
              <li>• Do not release names until proper notification completed</li>
              <li>• Follow special release procedures</li>
            </ul>
          </InfoCard>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30">
              <h3 className="font-semibold text-red-800 dark:text-red-200">When Death Investigation is REQUIRED</h3>
              <ul className="mt-3 space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• Death from other than natural causes</li>
                <li>• Death under suspicious or unusual circumstances</li>
                <li>• Death involving potential claims</li>
                <li>• Death during training or operations</li>
                <li>• Death involving misconduct</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/30">
              <h3 className="font-semibold text-green-800 dark:text-green-200">When NOT Required</h3>
              <p className="mt-3 text-sm text-green-700 dark:text-green-300">
                Death from natural causes with no unusual circumstances and no potential claims.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
            <h3 className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-200">
              <Clock className="h-4 w-4" />
              Timeline
            </h3>
            <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
              Complete as expeditiously as possible. Benefit determinations have deadlines.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Mistakes to Avoid */}
      <CollapsibleSection icon={XCircle} title="Common Mistakes to Avoid">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">1. Starting without contacting a judge advocate</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Always contact judge advocate before beginning
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">2. Interviewing suspected witnesses first</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Interview witnesses suspected of misconduct LAST
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">3. Failing to give required warnings</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Give Article 31 warnings to suspects. Give LOD warning before statements about injury/disease origin
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">4. Using safety investigation statements</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Never use statements from safety investigations. Interview witnesses yourself
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">5. Speculating in findings</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Findings must be supported by preponderance of evidence. Draw reasonable inferences, do not speculate
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">6. Failing to preserve evidence</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Secure evidence immediately. Maintain chain of custody. Document everything
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">7. Missing the deadline</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Plan your investigation. Track progress. Request extension if needed before deadline
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">8. Not citing evidence for findings</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Every finding of fact must cite the enclosure that supports it
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">9. Opinions not supported by findings</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Every opinion must be based on your findings of fact
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
            <h4 className="font-semibold text-red-800 dark:text-red-200">10. Incomplete investigation</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              <span className="font-medium">Solution:</span> Address every issue in the convening order. Ask: Who, What, Where, When, How, Why
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Quick Reference Checklists */}
      <CollapsibleSection icon={ListChecks} title="Quick Reference Checklists">
        <div className="space-y-6">
          {/* Preliminary Inquiry Checklist */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preliminary Inquiry Checklist</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Appointed by commander</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Gathered basic facts (Who, What, Where, When)</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Identified witnesses</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Identified evidence</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Preserved evidence</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Documented findings in writing</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Briefed commander</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Completed within 3 days (or extension granted)</li>
            </ul>
          </div>

          {/* Command Investigation Checklist */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Investigation Checklist</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Reviewed convening order</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Contacted judge advocate</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Coordinated with NCIS/Safety if applicable</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Created investigation plan</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Collected documentary evidence</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Collected physical evidence (chain of custody)</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Photographed/documented physical evidence</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Interviewed non-suspect witnesses</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Gave Article 31 warnings to suspects</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Interviewed suspect witnesses (last)</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Analyzed evidence (preponderance standard)</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Wrote preliminary statement</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Wrote findings of fact (cited evidence)</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Wrote opinions (supported by findings)</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Wrote recommendations</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Numbered and attached all enclosures</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Signed and dated report</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Submitted by due date</li>
            </ul>
          </div>

          {/* LOD/Misconduct Checklist */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LOD/Misconduct Determination Checklist</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Gave LOD warning advisement before statements</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Applied preponderance of evidence standard</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Applied presumption that injury is in LOD</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Applied presumption against misconduct</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> If intoxication, addressed proximate cause</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> If suicide/self-harm, addressed mental responsibility</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Made one of four possible findings</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Documented rationale</li>
            </ul>
          </div>

          {/* Death Case Checklist */}
          <div className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Death Case Checklist</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Notified NCIS (if suspicious circumstances)</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Coordinated with Casualty Affairs</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Did not release names before notification</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Completed expeditiously</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Made LOD/misconduct determination</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-zinc-400" /> Followed special release procedures</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Key Links */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)]/90 to-[var(--sa-navy)] p-6 text-white shadow-lg">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <ExternalLink className="h-5 w-5" />
          Key Links
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-[var(--sa-gold)]">Reference</h3>
            <a
              href="https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/5800.7G_CH-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-3 transition hover:bg-white/20"
            >
              <ExternalLink className="h-4 w-4" />
              <div>
                <div className="text-sm font-medium">JAGINST 5800.7G CH-2</div>
                <div className="text-xs text-white/70">JAGMAN Chapter II - Administrative Investigations</div>
              </div>
            </a>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-[var(--sa-gold)]">Contacts for Guidance</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                Command Judge Advocate
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                RLSO Command Services Department
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                OJAG Code 13: DSN 224-7415 / 703-614-7415
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                HQMC Code JAR: 703-614-2510 / DSN 224-2510
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="flex gap-3">
        <Link
          href="/roles/leaders"
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10"
        >
          Back to Leaders Home
        </Link>
      </div>
    </div>
  );
}
