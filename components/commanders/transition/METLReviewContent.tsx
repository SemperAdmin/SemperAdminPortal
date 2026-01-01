"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { METL_REVIEW_DATA } from "../../../data/transitionCommandData";
import {
  Target,
  CheckCircle,
  ClipboardList,
  Monitor,
  ExternalLink,
} from "lucide-react";

export function METLReviewContent() {
  const data = METL_REVIEW_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "METL Review" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <Target className="h-8 w-8 text-[var(--sa-gold)]" />
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

      {/* Mission Types */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Target className="h-5 w-5" />
          Mission Types
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.missionTypes.map((mission, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {mission.type}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{mission.description}</p>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">{mission.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Validation Steps */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          METL Validation Steps
        </h2>
        <ol className="space-y-3">
          {data.validationSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                {idx + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* MET Assessments */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Target className="h-5 w-5" />
          MET Assessment Ratings
        </h2>
        <div className="space-y-3">
          {data.metAssessments.map((assessment, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                assessment.rating.startsWith('Y') ? 'bg-green-600' :
                assessment.rating.startsWith('Q') ? 'bg-amber-500' : 'bg-red-600'
              }`}>
                {assessment.rating.charAt(0)}
              </span>
              <div>
                <div className="font-medium text-zinc-700 dark:text-zinc-300">{assessment.rating}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{assessment.meaning}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DRRS Requirements */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          DRRS Reporting Requirements
        </h2>
        <ul className="space-y-2">
          {data.drrsRequirements.map((req, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              {req}
            </li>
          ))}
        </ul>
      </section>

      {/* Systems */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Monitor className="h-5 w-5" />
          Related Systems
        </h2>
        <div className="space-y-3">
          {data.systems.map((system, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="flex items-center justify-between">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{system.name}</div>
                {system.url && (
                  <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Access
                  </a>
                )}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{system.purpose}</div>
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
