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

type FunctionalModulesData = {
  modules: Record<string, ModuleData>;
  references: Ref[];
};

export default function FunctionalModulesPage({
  data,
}: {
  data: FunctionalModulesData;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const moduleEntries = Object.entries(data.modules);

  const filteredModules = moduleEntries.filter(([_, module]) => {
    const query = searchQuery.toLowerCase();
    return (
      module.title.toLowerCase().includes(query) ||
      module.description.toLowerCase().includes(query) ||
      module.capabilities.some(c => c.toLowerCase().includes(query)) ||
      module.userTypes.some(u => u.toLowerCase().includes(query))
    );
  });

  const selectedModuleData = selectedModule ? data.modules[selectedModule] : null;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        {/* Header */}
        <section className="rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MOL Functional Modules</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marine Online provides various functional modules for personnel administration, travel management,
            performance evaluation, and unit management. Each module serves specific purposes and is available
            to authorized users based on their role and permissions.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Total Modules</div>
              <div className="mt-1 text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{moduleEntries.length}</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Self-Service</div>
              <div className="mt-1 text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {moduleEntries.filter(([_, m]) => m.userTypes.includes("Individual Members")).length}
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Unit Leader</div>
              <div className="mt-1 text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {moduleEntries.filter(([_, m]) => m.userTypes.some(u => u.includes("Unit Leader") || u.includes("Command"))).length}
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search modules by name, capability, or user type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pl-10 text-sm shadow-sm focus:border-[var(--sa-red)] focus:outline-none focus:ring-1 focus:ring-[var(--sa-red)] dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)]"
          />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        {/* Module List */}
        <div className="space-y-3">
          {filteredModules.map(([slug, module]) => (
            <button
              key={slug}
              onClick={() => setSelectedModule(selectedModule === slug ? null : slug)}
              className={`w-full rounded-xl border p-4 text-left transition ${
                selectedModule === slug
                  ? "border-[var(--sa-red)] bg-[var(--sa-red)]/5 dark:border-[var(--sa-red)] dark:bg-[var(--sa-red)]/10"
                  : "border-black/10 bg-white hover:border-[var(--sa-red)]/50 dark:border-white/15 dark:bg-black/60"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{module.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{module.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {module.userTypes.slice(0, 3).map((userType, idx) => (
                      <span key={idx} className="rounded-full bg-[var(--sa-navy)]/10 px-2 py-0.5 text-xs font-medium text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]">
                        {userType}
                      </span>
                    ))}
                    {module.userTypes.length > 3 && (
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-white/5 dark:text-zinc-400">
                        +{module.userTypes.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`h-5 w-5 shrink-0 text-zinc-400 transition ${selectedModule === slug ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              {/* Expanded Details */}
              {selectedModule === slug && selectedModuleData && (
                <div className="mt-4 space-y-4 border-t border-black/10 pt-4 dark:border-white/15" onClick={(e) => e.stopPropagation()}>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      Key Capabilities
                    </h4>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {selectedModuleData.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-2.5 w-2.5">
                              <path d="M5 12l5 5L20 7" />
                            </svg>
                          </span>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Authorized Users
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedModuleData.userTypes.map((userType, idx) => (
                        <span key={idx} className="rounded-full bg-[var(--sa-navy)] px-3 py-1 text-xs font-medium text-[var(--sa-cream)]">
                          {userType}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedModuleData.electronicRecords && selectedModuleData.electronicRecords.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        Electronic Records Available
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {selectedModuleData.electronicRecords.map((record, idx) => (
                          <span key={idx} className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 px-2 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                            {record}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedModuleData.selfCertifiedTransactions && selectedModuleData.selfCertifiedTransactions.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Self-Certified Transactions
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {selectedModuleData.selfCertifiedTransactions.map((transaction, idx) => (
                          <span key={idx} className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 dark:border-white/10 dark:bg-blue-900/20 dark:text-blue-300">
                            {transaction}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedModuleData.guide && selectedModuleData.guide.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        Step-by-Step Guide
                      </h4>
                      {selectedModuleData.guide.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/20 p-3 dark:border-white/10 dark:bg-white/5">
                          <h5 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{section.title}</h5>
                          <ol className="mt-2 space-y-2 pl-4">
                            {section.steps.map((stepItem, stepIdx) => (
                              <li key={stepIdx} className="text-sm text-zinc-700 dark:text-zinc-300">
                                <span className="font-medium">{stepIdx + 1}. {stepItem.step}</span>
                                {stepItem.details && stepItem.details.length > 0 && (
                                  <ul className="mt-1 ml-4 space-y-1">
                                    {stepItem.details.map((detail, detailIdx) => (
                                      <li key={detailIdx} className="text-xs text-zinc-600 dark:text-zinc-400 before:content-['•'] before:mr-2 before:text-zinc-400">
                                        {detail}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </button>
          ))}

          {filteredModules.length === 0 && (
            <div className="rounded-xl border border-black/10 bg-white p-8 text-center dark:border-white/15 dark:bg-black/60">
              <p className="text-zinc-500 dark:text-zinc-400">No modules found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>

      <aside className="space-y-6 lg:mt-0">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Module Categories</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Personnel Administration</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">EPAR, Personal Info, OMPF, User Management</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unit Management</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">UMSR, BIC Assignment, Organization Management</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Performance & Promotions</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">JEPES, Promotion Recs, Awards</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel & Leave</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Leave/Liberty, Inbound/Outbound Interview, Travel Voucher</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Support & Reports</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">TTS, Unit Reports, View Reports</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {data.references.filter(r => r.isQuickLink).map((ref, idx) => (
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
            Permissions Required
          </h4>
          <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
            Access to each module requires specific permissions assigned through MOL Permissions Management.
            Contact your MOL Coordinator or MISSO for access issues.
          </p>
        </section>
      </aside>
    </div>
  );
}
