"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { AVIATION_REFRESHER_DATA } from "../../../data/transitionCommandData";
import {
  Plane,
  CheckCircle,
  Clock,
  BookOpen,
  ExternalLink,
  AlertTriangle,
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

export function AviationRefresherContent() {
  const data = AVIATION_REFRESHER_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Aviation Refresher" },
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

      {/* Commands Covered */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Plane className="h-5 w-5" />
          Commands Covered
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
            <h3 className="font-semibold text-green-800 dark:text-green-200">Fixed Wing</h3>
            <ul className="mt-2 space-y-1">
              {data.commandsCovered.fixedWing.map((cmd, idx) => (
                <li key={idx} className="text-sm text-green-700 dark:text-green-300">{cmd}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">Rotary Wing</h3>
            <ul className="mt-2 space-y-1">
              {data.commandsCovered.rotaryWing.map((cmd, idx) => (
                <li key={idx} className="text-sm text-blue-700 dark:text-blue-300">{cmd}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200">Training</h3>
            <ul className="mt-2 space-y-1">
              {data.commandsCovered.training.map((cmd, idx) => (
                <li key={idx} className="text-sm text-amber-700 dark:text-amber-300">{cmd}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800/50">
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">Not Covered</h3>
            <ul className="mt-2 space-y-1">
              {data.commandsCovered.notCovered.map((cmd, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">{cmd}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Required Training */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <BookOpen className="h-5 w-5" />
          Required Training
        </h2>
        <div className="space-y-4">
          {data.requiredTraining.map((training, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {training.name}
              </h3>
              <div className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
                <div>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Purpose:</span>
                  <span className="ml-1 text-zinc-600 dark:text-zinc-400">{training.purpose}</span>
                </div>
                <div>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Duration:</span>
                  <span className="ml-1 text-zinc-600 dark:text-zinc-400">{training.duration}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Location:</span>
                  <span className="ml-1 text-zinc-600 dark:text-zinc-400">{training.location}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Notes:</span>
                  <span className="ml-1 text-zinc-600 dark:text-zinc-400">{training.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Sequence */}
      <InfoCard icon={Clock} title="Recommended Sequence" variant="info">
        <ol className="space-y-2">
          {data.recommendedSequence.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
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
