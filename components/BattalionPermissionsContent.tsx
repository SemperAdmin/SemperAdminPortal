"use client";
import { useState } from "react";

type Permission = {
  name: string;
  description: string;
};

type PermissionModule = {
  title: string;
  menuPath: string;
  permissions: Permission[];
};

type TemplateAuthority = {
  execution: boolean;
  delegate: boolean;
  grantDelegate: boolean;
};

type TemplatePermission = {
  module: string;
  permission: string;
  authority: TemplateAuthority;
};

type SystemTemplate = {
  name: string;
  restriction?: string;
  description?: string;
  permissions: TemplatePermission[];
};

type BattalionPermissionsData = {
  permissionModules: PermissionModule[];
  systemTemplates: SystemTemplate[];
};

type Ref = { title: string; url: string; isQuickLink?: boolean };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "permissions", label: "Permissions" },
  { id: "templates", label: "Templates" },
  { id: "matrix", label: "Permission Matrix" },
  { id: "references", label: "References" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function BattalionPermissionsContent({
  data,
  references
}: {
  data: BattalionPermissionsData;
  references: Ref[];
}) {
  const [tab, setTab] = useState<TabId>("overview");
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const filteredPermissions = selectedModule
    ? data.permissionModules.filter(m => m.title === selectedModule)
    : data.permissionModules;

  const selectedTemplateData = selectedTemplate
    ? data.systemTemplates.find(t => t.name === selectedTemplate)
    : null;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-md px-3 py-2 text-sm ${tab === t.id ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Battalion Organization Permissions</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              This document outlines the permissions and system templates available to battalion level organizations in Marine Online (MOL).
              Permission availability is determined by a combination of the component designation (Active or Reserve) of the unit and if
              the corresponding module has been enabled by the Manpower Information Systems Support Office (MISSO) with Organization Management.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Permission Modules</div>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{data.permissionModules.length}</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Functional areas with assignable permissions</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">System Templates</div>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{data.systemTemplates.length}</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Pre-configured role templates</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-3 text-sm opacity-90">
                Battalion organizations manage MOL permissions through system templates and individual permission assignments.
                The Commanding Officer (CO) template is the primary authority holder, with ability to delegate permissions
                through the chain of command. Understanding the distinction between Execution, Delegate, and Grant Delegate
                authorities is essential for proper permissions management.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authority Types</h3>
              <div className="mt-3 space-y-3">
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                  <h4 className="font-bold text-green-800 dark:text-green-400">Execution</h4>
                  <p className="mt-1 text-sm text-green-700 dark:text-zinc-300">
                    The ability to personally perform the function associated with the permission.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                  <h4 className="font-bold text-blue-800 dark:text-blue-400">Delegate</h4>
                  <p className="mt-1 text-sm text-blue-700 dark:text-zinc-300">
                    The ability to assign execution authority to another user within the organizational scope.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
                  <h4 className="font-bold text-amber-800 dark:text-amber-400">Grant Delegate</h4>
                  <p className="mt-1 text-sm text-amber-700 dark:text-zinc-300">
                    The ability to allow another user to further delegate the permission to others.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "permissions" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Permission Modules</h2>
              <select
                value={selectedModule || ""}
                onChange={(e) => setSelectedModule(e.target.value || null)}
                className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)]"
              >
                <option value="">All Modules</option>
                {data.permissionModules.map((m) => (
                  <option key={m.title} value={m.title}>{m.title}</option>
                ))}
              </select>
            </div>

            <div className="mt-4 space-y-4">
              {filteredPermissions.map((module) => (
                <div key={module.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{module.title}</h3>
                    <span className="rounded-full bg-[var(--sa-navy)]/10 px-2 py-0.5 text-xs font-medium text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]">
                      {module.menuPath}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {module.permissions.map((perm, idx) => (
                      <div key={idx} className="rounded-lg border border-black/5 bg-white p-3 dark:border-white/10 dark:bg-black/40">
                        <div className="font-medium text-sm text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{perm.name}</div>
                        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{perm.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "templates" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">System Templates</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              System templates are pre-configured permission sets assigned through MOL Management &gt; Manage Permissions.
              Each template includes specific permissions with defined authority levels.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {data.systemTemplates.map((template) => (
                <button
                  key={template.name}
                  onClick={() => setSelectedTemplate(selectedTemplate === template.name ? null : template.name)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selectedTemplate === template.name
                      ? "border-[var(--sa-red)] bg-[var(--sa-red)]/5 dark:border-[var(--sa-red)] dark:bg-[var(--sa-red)]/10"
                      : "border-black/10 bg-white hover:border-[var(--sa-red)]/50 dark:border-white/15 dark:bg-black/60"
                  }`}
                >
                  <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{template.name}</div>
                  {template.restriction && (
                    <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">{template.restriction}</p>
                  )}
                  {template.description && (
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{template.description}</p>
                  )}
                  <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                    {template.permissions.length} permissions
                  </div>
                </button>
              ))}
            </div>

            {selectedTemplateData && (
              <div className="mt-6 rounded-xl border border-[var(--sa-red)]/30 bg-[var(--sa-cream)]/40 p-4 dark:border-[var(--sa-red)]/30 dark:bg-white/5">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  {selectedTemplateData.name} - Permissions
                </h3>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-black/10 dark:border-white/15">
                        <th className="px-2 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Module</th>
                        <th className="px-2 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Permission</th>
                        <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Exec</th>
                        <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Del</th>
                        <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Grant</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedTemplateData.permissions.map((perm, idx) => (
                        <tr key={idx} className="border-b border-black/5 dark:border-white/10">
                          <td className="px-2 py-2 text-xs text-zinc-700 dark:text-zinc-300">{perm.module}</td>
                          <td className="px-2 py-2 text-xs text-zinc-700 dark:text-zinc-300">{perm.permission}</td>
                          <td className="px-2 py-2 text-center">
                            {perm.authority.execution && (
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3"><path d="M5 12l5 5L20 7" /></svg>
                              </span>
                            )}
                          </td>
                          <td className="px-2 py-2 text-center">
                            {perm.authority.delegate && (
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3"><path d="M5 12l5 5L20 7" /></svg>
                              </span>
                            )}
                          </td>
                          <td className="px-2 py-2 text-center">
                            {perm.authority.grantDelegate && (
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3"><path d="M5 12l5 5L20 7" /></svg>
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}

        {tab === "matrix" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Permission Matrix Summary</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Quick reference showing which system templates have access to key permission modules.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="px-2 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] sticky left-0 bg-white dark:bg-black/40">Template</th>
                    <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">UMSR</th>
                    <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave</th>
                    <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">EPAR</th>
                    <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PromRec</th>
                    <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reports</th>
                    <th className="px-2 py-2 font-semibold text-center text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BIC</th>
                  </tr>
                </thead>
                <tbody>
                  {data.systemTemplates.slice(0, 10).map((template) => {
                    const hasModule = (moduleName: string) =>
                      template.permissions.some(p => p.module.toLowerCase().includes(moduleName.toLowerCase()));
                    return (
                      <tr key={template.name} className="border-b border-black/5 dark:border-white/10">
                        <td className="px-2 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)] sticky left-0 bg-white dark:bg-black/40">{template.name}</td>
                        <td className="px-2 py-2 text-center">{hasModule("UMSR") ? "✓" : "-"}</td>
                        <td className="px-2 py-2 text-center">{hasModule("Leave") ? "✓" : "-"}</td>
                        <td className="px-2 py-2 text-center">{hasModule("EPAR") ? "✓" : "-"}</td>
                        <td className="px-2 py-2 text-center">{hasModule("PromRec") || hasModule("Promotion") ? "✓" : "-"}</td>
                        <td className="px-2 py-2 text-center">{hasModule("Reports") ? "✓" : "-"}</td>
                        <td className="px-2 py-2 text-center">{hasModule("BIC") ? "✓" : "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
              <h4 className="font-bold text-amber-800 dark:text-amber-400">Key Considerations</h4>
              <ul className="mt-2 space-y-1 text-xs text-amber-700 dark:text-zinc-300">
                <li>• The CO template has full authority over all battalion-level permissions</li>
                <li>• MOL Coordinator can manage most permissions on behalf of the CO</li>
                <li>• Template permissions follow the chain of command structure</li>
                <li>• OOD/SDNCO/DNCO templates are time-limited duty positions</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <div className="mt-4 space-y-3">
              {references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-black/10 bg-white p-4 shadow-sm transition hover:border-[var(--sa-red)] dark:border-white/15 dark:bg-black/60"
                >
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ref.title}</div>
                  <div className="mt-1 text-xs text-[var(--sa-red)] underline">{ref.url}</div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6 lg:mt-12">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Templates</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">Commanding Officer (CO)</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">Primary authority holder</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MOL Coordinator</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">SSgt+ or GS</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">By Direction CO</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Delegated CO authority</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {references.filter(r => r.isQuickLink).map((ref, idx) => (
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
            Version Info
          </h4>
          <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
            Battalion Organization Permissions V2.0 (May 2023). Contact your MISSO for current module availability.
          </p>
        </section>
      </aside>
    </div>
  );
}
