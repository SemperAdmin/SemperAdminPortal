"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { STATUS_COMMAND_LETTER_DATA } from "../../../data/transitionCommandData";
import {
  FileText,
  CheckCircle,
  Users,
  AlertTriangle,
  Clock,
  ExternalLink,
  ClipboardList,
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

export function StatusCommandLetterContent() {
  const data = STATUS_COMMAND_LETTER_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Status of Command Letter" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-[var(--sa-gold)]" />
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

      {/* Content Areas */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          Content Areas to Address
        </h2>
        <div className="space-y-4">
          {data.contentAreas.map((area, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {area.area}
              </h3>
              <ul className="space-y-1">
                {area.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Format Options */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Format Options
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {data.formatOptions.map((option, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{option.format}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{option.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Incoming CO Priorities */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Clock className="h-5 w-5" />
          Incoming CO Priorities
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-3 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Immediate</h3>
            <ul className="mt-2 space-y-1">
              {data.incomingCOPriorities.immediate.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3 dark:bg-amber-900/20">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200">First Week</h3>
            <ul className="mt-2 space-y-1">
              {data.incomingCOPriorities.firstWeek.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900/20">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">First 30 Days</h3>
            <ul className="mt-2 space-y-1">
              {data.incomingCOPriorities.first30Days.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-900/20">
            <h3 className="font-semibold text-green-800 dark:text-green-200">First 60 Days</h3>
            <ul className="mt-2 space-y-1">
              {data.incomingCOPriorities.first60Days.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
