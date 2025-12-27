"use client";

import { useState, useMemo, type ReactNode } from "react";
import { QuickLinks } from "../QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };
type Tab = { id: string; label: string; type?: "references" };

type Props = {
  tabs: Tab[];
  data: { references: Ref[] };
  content: Record<string, ReactNode>;
  sidebar?: ReactNode;
};

/**
 * Reusable tabbed content layout component for Dependency Management pages
 * and similar content sections. Handles tab navigation, grid layout, and
 * sidebar with QuickLinks.
 *
 * @param tabs - Array of tab definitions with id, label, and optional type.
 *               Use type: "references" to auto-generate a references tab.
 * @param data - Reference data including references array
 * @param content - Record mapping tab IDs to their content (ReactNode)
 * @param sidebar - Optional additional sidebar content below QuickLinks
 */
export function TabbedContentLayout({ tabs, data, content, sidebar }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  const allContent = useMemo(() => {
    const dynamicContent = { ...content };

    // Auto-generate references tab based on tab type property
    const referencesTab = tabs.find(tab => tab.type === "references");
    if (referencesTab && !content[referencesTab.id]) {
      dynamicContent[referencesTab.id] = (
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            References & Resources
          </h2>
          <ul className="mt-4 space-y-2">
            {data.references.map((ref) => (
              <li key={ref.url}>
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
      );
    }

    return dynamicContent;
  }, [content, data.references, tabs]);

  const contentToRender = useMemo(() => {
    return allContent[activeTab] ?? null;
  }, [activeTab, allContent]);

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-black/10 dark:border-white/10">
        <nav className="-mb-px flex gap-4 overflow-x-auto">
          {tabs.map((tab) => (
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
          {contentToRender}
        </div>

        <aside className="space-y-6">
          <QuickLinks references={data.references} />
          {sidebar}
        </aside>
      </div>
    </div>
  );
}
