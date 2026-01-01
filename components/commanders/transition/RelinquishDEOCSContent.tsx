"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { RELINQUISH_DEOCS_DATA } from "../../../data/transitionCommandData";
import {
  BarChart3,
  CheckCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  Users,
  Phone,
  FileText,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

function InfoCard({
  icon: Icon,
  title,
  children,
  variant = "default",
}: {
  icon?: React.ElementType;
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success" | "info";
}) {
  const variants = {
    default: "border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20",
    warning: "border-amber-500/40 bg-amber-500/10 dark:bg-amber-500/20",
    success: "border-green-500/40 bg-green-500/10 dark:bg-green-500/20",
    info: "border-blue-500/40 bg-blue-500/10 dark:bg-blue-500/20",
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

export function RelinquishDEOCSContent() {
  const data = RELINQUISH_DEOCS_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "DEOCS (Relinquishing)" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-[var(--sa-gold)]" />
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-1 text-[var(--sa-cream)]/80">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <InfoCard icon={AlertTriangle} title="Important" variant="warning">
        <p>This DEOCS requirement is tied specifically to <strong>RELINQUISHING</strong> command. It is DIFFERENT from the annual DEOCS requirement. Initiate this survey 90 days prior to your Change of Command.</p>
      </InfoCard>

      {/* Overview */}
      <InfoCard icon={BarChart3} title="Overview" variant="info">
        <p>{data.overview}</p>
      </InfoCard>

      {/* Key Points */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <CheckCircle className="h-5 w-5 text-green-600" />
          Key Points
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <tbody>
              {data.keyPoints.map((point, idx) => (
                <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Required */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Why This is Required
        </h2>
        <div className="space-y-3">
          {data.whyRequired.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.reason}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Clock className="h-5 w-5" />
          Timeline for Relinquishing
        </h2>
        <div className="space-y-4">
          {data.timeline.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="inline-block rounded-full bg-[var(--sa-navy)] px-3 py-1 text-xs font-bold text-white">
                  {item.time}
                </span>
              </div>
              <div>
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.action}</div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turnover Materials */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          What to Include in Turnover
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Survey Results</h3>
            <ul className="space-y-1">
              {data.turnoverMaterials.surveyResults.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Action Plan</h3>
            <ul className="space-y-1">
              {data.turnoverMaterials.actionPlan.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Progress Report</h3>
            <ul className="space-y-1">
              {data.turnoverMaterials.progressReport.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Briefing HHQ */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Users className="h-5 w-5" />
          Briefing Higher Commander
        </h2>
        <div className="space-y-4">
          <div>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">When:</span>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{data.briefingHHQ.when}</p>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">What to Include:</h3>
            <ul className="space-y-1">
              {data.briefingHHQ.whatToInclude.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
              <h3 className="mb-2 flex items-center gap-2 font-medium text-green-800 dark:text-green-200">
                <ThumbsUp className="h-4 w-4" />
                Addressing Negative Findings - Do This
              </h3>
              <ul className="space-y-1">
                {data.briefingHHQ.addressingNegativeFindings.doThis.map((item, idx) => (
                  <li key={idx} className="text-sm text-green-700 dark:text-green-300">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <h3 className="mb-2 flex items-center gap-2 font-medium text-red-800 dark:text-red-200">
                <ThumbsDown className="h-4 w-4" />
                Avoid This
              </h3>
              <ul className="space-y-1">
                {data.briefingHHQ.addressingNegativeFindings.avoidThis.map((item, idx) => (
                  <li key={idx} className="text-sm text-red-700 dark:text-red-300">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination with Incoming CO */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Users className="h-5 w-5" />
          Coordination with Incoming CO
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">What to Share</h3>
            <ul className="space-y-1">
              {data.coordinationWithIncomingCO.whatToShare.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Discuss Action Plan</h3>
            <ul className="space-y-1">
              {data.coordinationWithIncomingCO.discussActionPlan.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Pending Issues</h3>
            <ul className="space-y-1">
              {data.coordinationWithIncomingCO.pendingIssues.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Inspection Findings */}
      <InfoCard icon={AlertTriangle} title="Common IG Inspection Findings" variant="warning">
        <ul className="space-y-2">
          {data.commonInspectionFindings.map((finding, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
              {finding}
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Key Contacts */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Phone className="h-5 w-5" />
          Key Contacts
        </h2>
        <div className="space-y-3">
          {data.keyContacts.map((contact, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{contact.name}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{contact.info}</div>
              {contact.url && (
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline dark:text-blue-400"
                >
                  Visit Website <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ExternalLink className="h-5 w-5" />
          References
        </h2>
        <ul className="space-y-2">
          {data.references.map((ref, idx) => (
            <li key={idx}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                {ref.title}
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
