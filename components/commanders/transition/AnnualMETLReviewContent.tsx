"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { ANNUAL_METL_REVIEW_DATA } from "../../../data/transitionCommandData";
import {
  Target,
  CheckCircle,
  FileText,
  AlertTriangle,
  ExternalLink,
  Database,
  BarChart,
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

export function AnnualMETLReviewContent() {
  const data = ANNUAL_METL_REVIEW_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Annual METL Review" },
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

      {/* Overview */}
      <InfoCard icon={Target} title="Overview" variant="info">
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

      {/* METL Components */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Target className="h-5 w-5" />
          METL Components
        </h2>
        <div className="space-y-3">
          {data.metlComponents.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.component}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Annual Review Process */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Annual Review Process
        </h2>
        <ol className="space-y-2">
          {data.annualReviewProcess.map((step, idx) => (
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
          <BarChart className="h-5 w-5" />
          MET Assessment Ratings
        </h2>
        <div className="space-y-3">
          {data.metAssessments.map((item, idx) => (
            <div key={idx} className={`rounded-lg p-3 ${
              item.rating.startsWith('Y') ? 'border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' :
              item.rating.startsWith('Q') ? 'border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20' :
              'border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
            }`}>
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.rating}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MCTIMS Procedures */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Database className="h-5 w-5" />
          MCTIMS Procedures
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Accessing METL:</h3>
            <ul className="space-y-1 pl-4">
              {data.mctimsProcedures.accessingMetl.map((step, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {step}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Updating METL:</h3>
            <ul className="space-y-1 pl-4">
              {data.mctimsProcedures.updatingMetl.map((step, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {step}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Validation:</h3>
            <ul className="space-y-1 pl-4">
              {data.mctimsProcedures.validation.map((step, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DRRS Connection */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Database className="h-5 w-5" />
          DRRS-MC Connection
        </h2>
        <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.drrsConnection.description}</p>
        <ul className="space-y-2">
          {data.drrsConnection.requirements.map((req, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              {req}
            </li>
          ))}
        </ul>
      </section>

      {/* IG Documentation */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Documentation for IG Inspection
        </h2>
        <ul className="space-y-2">
          {data.igDocumentation.map((doc, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              {doc}
            </li>
          ))}
        </ul>
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
