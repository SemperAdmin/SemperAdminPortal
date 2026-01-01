"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { COR_INCOMING_DATA } from "../../../data/transitionCommandData";
import {
  FileCheck,
  CheckCircle,
  Package,
  Users,
  AlertTriangle,
  Calendar,
  ExternalLink,
} from "lucide-react";

export function CertificateOfReliefContent() {
  const data = COR_INCOMING_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Certificate of Relief" },
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

      {/* Property to Inspect */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Package className="h-5 w-5" />
          Property/Accounts to Inspect
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="py-2 pr-4 text-left font-semibold">Category</th>
                <th className="py-2 text-left font-semibold">Items</th>
              </tr>
            </thead>
            <tbody>
              {data.propertyToInspect.map((prop, idx) => (
                <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{prop.category}</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">{prop.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Required Signatures */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Users className="h-5 w-5" />
          Required Signatures
        </h2>
        <div className="space-y-3">
          {data.requiredSignatures.map((sig, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{sig.role}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{sig.responsibility}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Discrepancy Handling */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          How to Handle Discrepancies
        </h2>
        <div className="space-y-3">
          {data.discrepancyHandling.map((item, idx) => (
            <div key={idx} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3 dark:bg-amber-900/20">
              <div className="font-medium text-amber-800 dark:text-amber-200">{item.method}</div>
              <div className="text-sm text-amber-700 dark:text-amber-300">{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Calendar className="h-5 w-5" />
          Timeline
        </h2>
        <div className="space-y-3">
          {data.timeline.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex h-8 min-w-[80px] items-center justify-center rounded bg-[var(--sa-navy)] px-2 text-xs font-bold text-white">
                {item.time}
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">{item.action}</div>
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
