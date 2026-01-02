"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { STATUS_COMMAND_LETTER_OUTGOING_DATA } from "../../../data/transitionCommandData";
import { InfoCard } from "../../ui/InfoCard";
import {
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  Users,
  Folder,
} from "lucide-react";
export function StatusCommandLetterOutgoingContent() {
  const data = STATUS_COMMAND_LETTER_OUTGOING_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Status of Command Letter (Outgoing)" },
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

      {/* Overview */}
      <InfoCard icon={FileText} title="Overview" variant="info">
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

      {/* Timeline */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Clock className="h-5 w-5" />
          Timeline for Outgoing CO
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

      {/* Required Content Sections */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Required Content Sections
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {data.requiredContentSections.map((section, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="mb-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{section.section}</h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Coordination with Incoming CO */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Users className="h-5 w-5" />
          Coordination with Incoming CO
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">What to Share</h3>
            <ul className="space-y-1">
              {data.coordinationWithIncomingCO.whatToShare.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Joint Meetings</h3>
            <ul className="space-y-1">
              {data.coordinationWithIncomingCO.jointMeetings.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Turnover Binder</h3>
            <ul className="space-y-1">
              {data.coordinationWithIncomingCO.turnoverBinder.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Common Mistakes and Fixes
        </h2>
        <div className="space-y-3">
          {data.commonMistakes.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
              <div className="font-medium text-amber-800 dark:text-amber-200">{item.mistake}</div>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">Fix: {item.fix}</p>
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
