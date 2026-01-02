"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { FUND_CONTROL_DATA } from "../../../data/transitionCommandData";
import { InfoCard } from "../../ui/InfoCard";
import {
  DollarSign,
  CheckCircle,
  BookOpen,
  AlertTriangle,
  ExternalLink,
  FileText,
} from "lucide-react";
export function FundControlContent() {
  const data = FUND_CONTROL_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Fund Control Training" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <DollarSign className="h-8 w-8 text-[var(--sa-gold)]" />
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

      {/* Required Courses */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <BookOpen className="h-5 w-5" />
          Required Courses
        </h2>
        <div className="space-y-4">
          {data.requiredCourses.map((course, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {course.name}
              </h3>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Requirement:</span> {course.requirement}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Purpose:</span> {course.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Locations */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <BookOpen className="h-5 w-5" />
          Training Locations
        </h2>
        <div className="space-y-3">
          {data.trainingLocations.map((location, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="flex items-center justify-between">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{location.name}</div>
                <a
                  href={location.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                >
                  Access
                </a>
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{location.notes}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three-Part Test */}
      <InfoCard icon={FileText} title="Three-Part Test for Spending Funds" variant="info">
        <p className="mb-3">{data.threePartTest.description}</p>
        <div className="space-y-2">
          {data.threePartTest.parts.map((part, idx) => (
            <div key={idx} className="rounded bg-blue-100 p-2 dark:bg-blue-900/30">
              <span className="font-semibold">{part.test}:</span> {part.meaning}
            </div>
          ))}
        </div>
      </InfoCard>

      {/* Key Terms */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Key Terms
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <tbody>
              {data.keyTerms.map((term, idx) => (
                <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{term.term}</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">{term.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Unauthorized Commitment Examples */}
      <InfoCard icon={AlertTriangle} title="Examples of Unauthorized Commitments" variant="warning">
        <ul className="space-y-2">
          {data.unauthorizedCommitmentExamples.map((example, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
              {example}
            </li>
          ))}
        </ul>
      </InfoCard>

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
