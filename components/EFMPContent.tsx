"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "enrollment", label: "Enrollment" },
  { id: "assignments", label: "Assignments" },
  { id: "resources", label: "Resources" },
  { id: "references", label: "References" },
];

export function EFMPContent({ data }: Props) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-black/10 dark:border-white/10">
        <nav className="-mb-px flex gap-4 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "border-[var(--sa-red)] text-[var(--sa-red)]"
                  : "border-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {activeTab === "overview" && (
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">EFMP Overview</h2>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Comprehensive guide for the Exceptional Family Member Program (EFMP). Learn about eligibility,
                enrollment procedures, assignment coordination, and available support services.
              </p>
              <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Coming Soon:</strong> Detailed content will be added with specific procedures, timelines, and requirements.
                </p>
              </div>
            </section>
          )}

          {activeTab === "enrollment" && (
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">EFMP Enrollment</h2>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                How to enroll family members, required medical documentation, and category determinations.
              </p>
            </section>
          )}

          {activeTab === "assignments" && (
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Assignment Coordination</h2>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                How EFMP affects PCS orders and assignment process to ensure needed services are available.
              </p>
            </section>
          )}

          {activeTab === "resources" && (
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Support Resources</h2>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Available support services, respite care, and family support resources for EFMP families.
              </p>
            </section>
          )}

          {activeTab === "references" && (
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References & Resources</h2>
              <ul className="mt-4 space-y-2">
                {data.references.map((ref) => (
                  <li key={ref.title}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--sa-red)] underline hover:no-underline"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <QuickLinks references={data.references} />
        </aside>
      </div>
    </div>
  );
}
