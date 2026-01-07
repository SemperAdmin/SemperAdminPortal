"use client";

import { useState } from "react";

type GuideStep = {
  step: string;
  details?: string[];
};

type GuideSection = {
  title: string;
  steps: GuideStep[];
};

type ModuleData = {
  title: string;
  description: string;
  capabilities: string[];
  userTypes: string[];
  electronicRecords?: string[];
  selfCertifiedTransactions?: string[];
  guide?: GuideSection[];
};

type Ref = { title: string; url: string; isQuickLink?: boolean };

export default function MOLFunctionalModuleContent({ data, references }: { data: ModuleData; references: Ref[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{data.title}</h2>
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{data.description}</p>

          <div className="mt-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Key Capabilities
            </h3>
            <ul className="mt-3 space-y-2">
              {data.capabilities.map((capability, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-lg border border-black/5 bg-[var(--sa-cream)]/40 p-3 dark:border-white/10 dark:bg-white/5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Authorized Users
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {data.userTypes.map((userType, idx) => (
              <span key={idx} className="rounded-full bg-[var(--sa-navy)] px-3 py-1 text-sm font-medium text-[var(--sa-cream)]">
                {userType}
              </span>
            ))}
          </div>
        </section>

        {data.electronicRecords && data.electronicRecords.length > 0 && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Electronic Records Available
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {data.electronicRecords.map((record, idx) => (
                <div key={idx} className="rounded-lg border border-black/5 bg-[var(--sa-cream)]/40 px-3 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  {record}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.selfCertifiedTransactions && data.selfCertifiedTransactions.length > 0 && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Self-Certified Transactions
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {data.selfCertifiedTransactions.map((transaction, idx) => (
                <div key={idx} className="rounded-lg border border-black/5 bg-[var(--sa-cream)]/40 px-3 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  {transaction}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.guide && data.guide.length > 0 && (
          <section className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-center gap-2 border-b border-black/5 px-6 pt-5 pb-0 dark:border-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Guide</h3>
            </div>
            <div className="flex flex-wrap gap-1 border-b border-black/5 px-4 dark:border-white/10">
              {data.guide.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === idx
                      ? "border-b-2 border-[var(--sa-red)] text-[var(--sa-red)]"
                      : "text-zinc-600 hover:text-[var(--sa-navy)] dark:text-zinc-400 dark:hover:text-[var(--sa-cream)]"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {data.guide[activeTab].steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="rounded-lg border border-black/5 bg-[var(--sa-cream)]/40 p-4 dark:border-white/10 dark:bg-white/5">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{step.step}</h4>
                    {step.details && step.details.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {step.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sa-red)]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6 lg:mt-0">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {references.filter(r => r.isQuickLink).map((ref, idx) => (
              <li key={idx}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-black/10 bg-white p-3 text-sm font-medium text-[var(--sa-navy)] transition hover:border-[var(--sa-red)] hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:border-[var(--sa-red)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {references.filter(r => !r.isQuickLink).map((ref, idx) => (
              <li key={idx}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
          <h4 className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Need Help?
          </h4>
          <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
            For technical issues or access problems, submit a trouble ticket through the MOL Trouble Ticket System (TTS) or contact your local MISSO.
          </p>
        </section>
      </aside>
    </div>
  );
}
