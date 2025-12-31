"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Users, Shield, Briefcase } from "lucide-react";
import { search, getSearchIndex, type SearchResult } from "../lib/search";

type Props = {
  /** Placeholder text */
  placeholder?: string;
  /** Whether to show in compact mode (header) */
  compact?: boolean;
  /** Callback when search is closed */
  onClose?: () => void;
};

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

export function SearchBar({ placeholder = "Search topics...", compact = false, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Get search index once on mount
  const searchIndex = getSearchIndex();

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 2) {
        const searchResults = search(query, searchIndex, 8);
        setResults(searchResults);
        setIsOpen(true);
        setSelectedIndex(-1);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query, searchIndex]);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || results.length === 0) {
        if (e.key === "Escape") {
          setQuery("");
          setIsOpen(false);
          onClose?.();
        }
        return;
      }

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
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            navigateToResult(results[selectedIndex]);
          }
          break;
        case "Escape":
          setIsOpen(false);
          setQuery("");
          onClose?.();
          break;
      }
    },
    [isOpen, results, selectedIndex, onClose]
  );

  const navigateToResult = (result: SearchResult) => {
    router.push(result.href);
    setQuery("");
    setIsOpen(false);
    onClose?.();
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={`relative ${compact ? "w-full" : "w-full max-w-xl"}`}>
      {/* Search Input */}
      <div className="relative">
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 ${
            compact ? "h-4 w-4" : "h-5 w-5"
          }`}
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-zinc-200 bg-white pl-10 pr-10 text-zinc-900 placeholder-zinc-400 shadow-sm transition focus:border-[var(--sa-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--sa-navy)]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-[var(--sa-cream)] dark:focus:ring-[var(--sa-cream)]/20 ${
            compact ? "py-1.5 text-sm" : "py-2.5 text-base"
          }`}
          aria-label="Search topics"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-activedescendant={selectedIndex >= 0 ? `search-result-${selectedIndex}` : undefined}
          role="combobox"
          aria-autocomplete="list"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            aria-label="Clear search"
          >
            <X className={compact ? "h-4 w-4" : "h-5 w-5"} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          id="search-results"
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-2 max-h-[400px] overflow-y-auto rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
        >
          {results.map((result, index) => {
            const CategoryIcon = CATEGORY_ICONS[result.category];
            const isSelected = index === selectedIndex;

            return (
              <button
                key={`${result.sectionSlug}-${result.href}`}
                id={`search-result-${index}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => navigateToResult(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex w-full items-start gap-3 px-4 py-3 text-left transition ${
                  isSelected
                    ? "bg-[var(--sa-navy)]/10 dark:bg-[var(--sa-cream)]/10"
                    : "hover:bg-zinc-50 dark:hover:bg-zinc-700/50"
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
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {highlightMatch(result.title, query)}
                    </span>
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
                    isSelected ? "text-[var(--sa-navy)] dark:text-[var(--sa-cream)]" : "text-zinc-300 dark:text-zinc-600"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}

          {/* Keyboard hint */}
          <div className="border-t border-zinc-100 px-4 py-2 text-xs text-zinc-400 dark:border-zinc-700 dark:text-zinc-500">
            <span className="mr-3">
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">↑</kbd>
              <kbd className="ml-1 rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">↓</kbd>
              {" "}to navigate
            </span>
            <span className="mr-3">
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Enter</kbd>
              {" "}to select
            </span>
            <span>
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Esc</kbd>
              {" "}to close
            </span>
          </div>
        </div>
      )}

      {/* No results message */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute left-0 right-0 z-50 mt-2 rounded-lg border border-zinc-200 bg-white p-4 text-center text-sm text-zinc-500 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
          No results found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}

/**
 * Highlight matching text in the title
 */
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
