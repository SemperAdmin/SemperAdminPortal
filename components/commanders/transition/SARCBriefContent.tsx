"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { SARC_BRIEF_DATA } from "../../../data/transitionCommandData";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Clock,
  XCircle,
  ExternalLink,
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

export function SARCBriefContent() {
  const data = SARC_BRIEF_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "SARC Brief" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-[var(--sa-gold)]" />
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-1 text-[var(--sa-cream)]/80">{data.subtitle}</p>
          </div>
        </div>
      </div>

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

      {/* Brief Topics */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Shield className="h-5 w-5" />
          Brief Topics
        </h2>
        <ul className="space-y-2">
          {data.briefTopics.map((topic, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-gold)]" />
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {/* Key Questions to Ask */}
      <InfoCard icon={HelpCircle} title="Key Questions to Ask Your SARC" variant="info">
        <ul className="space-y-2">
          {data.keyQuestionsToAsk.map((question, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <HelpCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              {question}
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Non-Delegable Duties */}
      <InfoCard icon={AlertTriangle} title="Non-Delegable Commander Duties" variant="warning">
        <ul className="space-y-2">
          {data.nonDelegableDuties.map((duty, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
              {duty}
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Prohibited Actions */}
      <section className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-800 dark:text-red-200">
          <XCircle className="h-5 w-5" />
          What NOT to Do
        </h2>
        <ul className="space-y-2">
          {data.prohibitedActions.map((action, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
              <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              {action}
            </li>
          ))}
        </ul>
      </section>

      {/* Related Timelines */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Clock className="h-5 w-5" />
          Related Timeline Requirements
        </h2>
        <div className="space-y-2">
          {data.relatedTimelines.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="flex min-w-[80px] items-center justify-center rounded bg-[var(--sa-navy)] px-2 py-1 text-xs font-bold text-white">
                {item.timeline}
              </span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.requirement}</span>
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
