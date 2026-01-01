"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { CERTIFICATE_OF_RELIEF_OUTGOING_DATA } from "../../../data/transitionCommandData";
import {
  FileCheck,
  CheckCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  Package,
  ClipboardList,
  PenTool,
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

export function CertificateOfReliefOutgoingContent() {
  const data = CERTIFICATE_OF_RELIEF_OUTGOING_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Certificate of Relief (Outgoing)" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <FileCheck className="h-8 w-8 text-[var(--sa-gold)]" />
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-1 text-[var(--sa-cream)]/80">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <InfoCard icon={FileCheck} title="Overview" variant="info">
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

      {/* Outgoing CO Timeline */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Clock className="h-5 w-5" />
          Outgoing CO Timeline
        </h2>
        <div className="space-y-4">
          {data.outgoingCOTimeline.map((item, idx) => (
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

      {/* Joint Inventory Process */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          Joint Inventory Process
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="mb-2 font-medium text-red-800 dark:text-red-200">High Priority (Joint Recommended)</h3>
            <ul className="space-y-1">
              {data.jointInventoryProcess.highPriority.map((item, idx) => (
                <li key={idx} className="text-sm text-red-700 dark:text-red-300">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
            <h3 className="mb-2 font-medium text-amber-800 dark:text-amber-200">Medium Priority (Spot-Checks)</h3>
            <ul className="space-y-1">
              {data.jointInventoryProcess.mediumPriority.map((item, idx) => (
                <li key={idx} className="text-sm text-amber-700 dark:text-amber-300">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
            <h3 className="mb-2 font-medium text-blue-800 dark:text-blue-200">Lower Priority (RO Certifications)</h3>
            <ul className="space-y-1">
              {data.jointInventoryProcess.lowerPriority.map((item, idx) => (
                <li key={idx} className="text-sm text-blue-700 dark:text-blue-300">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Documentation Requirements</h3>
          <ul className="space-y-1">
            {data.jointInventoryProcess.documentationRequirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Property Categories */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Package className="h-5 w-5" />
          Property Categories to Address
        </h2>
        <div className="space-y-3">
          {data.propertyCategories.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.category}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.include}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Requirements */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <PenTool className="h-5 w-5" />
          Signature Requirements
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Outgoing CO</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{data.signatureRequirements.outgoingCO}</p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Supply Officer</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{data.signatureRequirements.supplyOfficer}</p>
          </div>
        </div>
      </section>

      {/* Discrepancy Handling */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <AlertTriangle className="h-5 w-5" />
          Discrepancy Handling
        </h2>
        <div className="space-y-3">
          {data.discrepancyHandling.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="mb-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.method}</h3>
              <div className="grid gap-2 text-sm md:grid-cols-2">
                <div>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">When:</span>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.when}</p>
                </div>
                <div>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Process:</span>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.process}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CoR Content */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileCheck className="h-5 w-5" />
          Certificate of Relief Content
        </h2>
        <div className="space-y-3">
          {data.corContent.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.section}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.items}</p>
            </div>
          ))}
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
