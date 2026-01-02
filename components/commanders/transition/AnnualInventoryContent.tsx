"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { ANNUAL_INVENTORY_DATA } from "../../../data/transitionCommandData";
import { InfoCard } from "../../ui/InfoCard";
import {
  ClipboardCheck,
  CheckCircle,
  FileText,
  AlertTriangle,
  ExternalLink,
  Package,
  Search,
} from "lucide-react";
export function AnnualInventoryContent() {
  const data = ANNUAL_INVENTORY_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Annual Inventory" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <ClipboardCheck className="h-8 w-8 text-[var(--sa-gold)]" />
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-1 text-[var(--sa-cream)]/80">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <InfoCard icon={ClipboardCheck} title="Overview" variant="info">
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

      {/* Property to Inventory */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Package className="h-5 w-5" />
          Property to Inventory
        </h2>
        <div className="space-y-3">
          {data.propertyToInventory.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.category}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inventory Procedures */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Inventory Procedures
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Preparation:</h3>
            <ul className="space-y-1 pl-4">
              {data.inventoryProcedures.preparation.map((step, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {step}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Execution:</h3>
            <ul className="space-y-1 pl-4">
              {data.inventoryProcedures.execution.map((step, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {step}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Post-Inventory:</h3>
            <ul className="space-y-1 pl-4">
              {data.inventoryProcedures.postInventory.map((step, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CMR Verification */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Search className="h-5 w-5" />
          CMR Verification
        </h2>
        <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.cmrVerification.description}</p>
        <ul className="space-y-2">
          {data.cmrVerification.requirements.map((req, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              {req}
            </li>
          ))}
        </ul>
      </section>

      {/* Discrepancy Handling */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <AlertTriangle className="h-5 w-5" />
          Discrepancy Handling
        </h2>
        <div className="space-y-3">
          {data.discrepancyHandling.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.type}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.action}</p>
            </div>
          ))}
        </div>
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
