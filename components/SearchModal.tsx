"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, ArrowRight, Users, Shield, Briefcase, ExternalLink } from "lucide-react";
import { search, getSearchIndex, type SearchResult } from "../lib/search";

const CATEGORY_ICONS = {
  general: Users,
  leaders: Shield,
  admin: Briefcase,
};

const CATEGORY_LABELS = {
  general: "All Marines",
  leaders: "Leaders",
  admin: "Administrators",
};

export function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  // Global keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 px-2.5 py-1.5 text-xs text-zinc-500 shadow-sm transition hover:border-[var(--sa-navy)]/30 hover:bg-white dark:border-white/15 dark:bg-black/40 dark:text-zinc-400 dark:hover:border-[var(--sa-cream)]/30"
        aria-label="Search topics (Ctrl+K)"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden sm:inline rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] dark:bg-zinc-700">
          ⌘K
        </kbd>
      </button>

      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const searchIndex = getSearchIndex();

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 2) {
        const searchResults = search(query, searchIndex, 10);
        setResults(searchResults);
        setSelectedIndex(0);
      } else {
        setResults([]);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [query, searchIndex]);

  // Handle escape to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const navigateToResult = useCallback(
    (result: SearchResult) => {
      router.push(result.href);
      onClose();
    },
    [router, onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (results.length > 0 && selectedIndex >= 0) {
          navigateToResult(results[selectedIndex]);
        }
        break;
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex min-h-full items-start justify-center p-4 pt-[15vh]">
        <div className="relative w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
          {/* Search Input */}
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-700">
            <Search className="ml-4 h-5 w-5 text-zinc-400" aria-hidden="true" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for topics, forms, or procedures..."
              className="flex-1 bg-transparent px-4 py-4 text-base text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-zinc-100 dark:placeholder-zinc-500"
              aria-label="Search"
            />
            <button
              onClick={onClose}
              className="mr-2 rounded p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.length >= 2 && results.length === 0 && (
              <div className="p-8 text-center text-zinc-500 dark:text-zinc-400">
                <p className="text-sm">No results found for &quot;{query}&quot;</p>
                <p className="mt-2 text-xs">Try searching for BAH, PCS, JEPES, or other topics</p>
              </div>
            )}

            {results.length > 0 && (
              <>
                <ul role="listbox" className="py-2">
                  {results.map((result, index) => {
                    const CategoryIcon = CATEGORY_ICONS[result.category];
                    const isSelected = index === selectedIndex;

                    return (
                      <li key={`${result.sectionSlug}-${result.href}`}>
                        <button
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => navigateToResult(result)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`flex w-full items-start gap-3 px-4 py-3 text-left transition ${
                            isSelected
                              ? "bg-[var(--sa-navy)]/10 dark:bg-[var(--sa-cream)]/10"
                              : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                          }`}
                        >
                          <div
                            className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                              result.category === "leaders"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                : result.category === "admin"
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}
                          >
                            <CategoryIcon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-zinc-900 dark:text-zinc-100">
                              {highlightMatch(result.title, query)}
                            </div>
                            <p className="mt-0.5 truncate text-sm text-zinc-500 dark:text-zinc-400">
                              {result.description}
                            </p>
                            <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                              <span>{CATEGORY_LABELS[result.category]}</span>
                              <span aria-hidden="true">•</span>
                              <span>{result.section}</span>
                            </div>
                          </div>
                          <ArrowRight
                            className={`mt-1 h-4 w-4 flex-shrink-0 transition ${
                              isSelected
                                ? "text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"
                                : "text-zinc-300 dark:text-zinc-600"
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {/* View All Results Link */}
                <div className="border-t border-zinc-100 dark:border-zinc-700">
                  <Link
                    href={`/search?q=${encodeURIComponent(query)}`}
                    onClick={onClose}
                    className="flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[var(--sa-navy)] transition hover:bg-zinc-50 dark:text-[var(--sa-cream)] dark:hover:bg-zinc-800/50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View all results for &quot;{query}&quot;
                  </Link>
                </div>
              </>
            )}

            {query.length < 2 && (
              <div className="p-6 text-center text-zinc-500 dark:text-zinc-400">
                <p className="text-sm">Start typing to search...</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {["BAH", "PCS", "JEPES", "Leave", "Awards", "Deployment"].map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-200 px-4 py-2 text-xs text-zinc-400 dark:border-zinc-700 dark:text-zinc-500">
            <span className="mr-3">
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">↑</kbd>
              <kbd className="ml-1 rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">↓</kbd>
              {" "}navigate
            </span>
            <span className="mr-3">
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Enter</kbd>
              {" "}select
            </span>
            <span>
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Esc</kbd>
              {" "}close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;

  const normalizedQuery = query.toLowerCase();
  const normalizedText = text.toLowerCase();
  const index = normalizedText.indexOf(normalizedQuery);

  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <>
      {before}
      <span className="bg-yellow-200 dark:bg-yellow-900/50">{match}</span>
      {after}
    </>
  );
}
