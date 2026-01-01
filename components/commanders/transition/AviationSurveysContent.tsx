"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { AVIATION_SURVEYS_DATA } from "../../../data/transitionCommandData";
import {
  Plane,
  CheckCircle,
  ClipboardList,
  ExternalLink,
  FileText,
} from "lucide-react";

export function AviationSurveysContent() {
  const data = AVIATION_SURVEYS_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Aviation Surveys" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <Plane className="h-8 w-8 text-[var(--sa-gold)]" />
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

      {/* Surveys */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          Required Surveys
        </h2>
        <div className="space-y-4">
          {data.surveys.map((survey, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {survey.name}
              </h3>
              <div className="mt-2 space-y-2 text-sm">
                <p className="text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Purpose:</span> {survey.purpose}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Who Takes:</span> {survey.whoTakes}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Measures:</span> {survey.measures}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Administration Steps */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          How to Administer Surveys
        </h2>
        <ol className="space-y-3">
          {data.administrationSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                {idx + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Responding to Findings */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          Responding to Survey Findings
        </h2>
        <ol className="space-y-3">
          {data.respondingToFindings.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-gold)] text-xs font-bold text-[var(--sa-navy)]">
                {idx + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Survey Website */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-blue-800 dark:text-blue-200">
          <ExternalLink className="h-5 w-5" />
          Survey Portal
        </h2>
        <a
          href={data.surveyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          {data.surveyWebsite}
        </a>
      </div>

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
