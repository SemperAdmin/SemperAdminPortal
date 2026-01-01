"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { COMMAND_PHILOSOPHY_DATA } from "../../../data/transitionCommandData";
import {
  Lightbulb,
  CheckCircle,
  BookOpen,
  AlertTriangle,
  ExternalLink,
  Check,
  X,
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

export function CommandPhilosophyContent() {
  const data = COMMAND_PHILOSOPHY_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "Command Philosophy" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <Lightbulb className="h-8 w-8 text-[var(--sa-gold)]" />
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-1 text-[var(--sa-cream)]/80">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <InfoCard icon={Lightbulb} title="Overview" variant="info">
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

      {/* Purpose */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Lightbulb className="h-5 w-5" />
          Purpose of Command Philosophy
        </h2>
        <div className="space-y-3">
          {data.purposes.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.purpose}</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Topics */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <BookOpen className="h-5 w-5" />
          Recommended Topics
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Core Leadership</h3>
            <ul className="space-y-1">
              {data.recommendedTopics.coreLeadership.map((topic, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {topic}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Operational</h3>
            <ul className="space-y-1">
              {data.recommendedTopics.operational.map((topic, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {topic}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Leadership Development</h3>
            <ul className="space-y-1">
              {data.recommendedTopics.leadershipDevelopment.map((topic, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {topic}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Culture & Climate</h3>
            <ul className="space-y-1">
              {data.recommendedTopics.cultureAndClimate.map((topic, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">• {topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-800 dark:text-green-200">
            <Check className="h-5 w-5" />
            Do This
          </h2>
          <ul className="space-y-2">
            {data.bestPractices.doThis.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-800 dark:text-red-200">
            <X className="h-5 w-5" />
            Avoid This
          </h2>
          <ul className="space-y-2">
            {data.bestPractices.avoidThis.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                <X className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Common Mistakes */}
      <InfoCard icon={AlertTriangle} title="Common Mistakes to Avoid" variant="warning">
        <ul className="space-y-2">
          {data.commonMistakes.map((mistake, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
              {mistake}
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
