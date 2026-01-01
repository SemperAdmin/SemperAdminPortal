"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Users, Shield, Briefcase, ArrowLeft, FileText, Loader2 } from "lucide-react";
import { search, getSearchIndex, type SearchResult } from "../../lib/search";

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

const CATEGORY_COLORS = {
  general: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  leaders: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  admin: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const searchIndex = getSearchIndex();

  // Update query from URL params
  useEffect(() => {
    const urlQuery = searchParams.get("q") || "";
    setQuery(urlQuery);
    if (urlQuery.length >= 2) {
      setHasSearched(true);
    }
  }, [searchParams]);

  // Perform search when query changes
  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = search(query, searchIndex, 50); // Show up to 50 results
      setResults(searchResults);
      setHasSearched(true);
    } else {
      setResults([]);
      if (query.length > 0) {
        setHasSearched(true);
      }
    }
  }, [query, searchIndex]);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    const url = new URL(window.location.href);
    url.searchParams.set("q", query);
    window.history.pushState({}, "", url.toString());
  };

  // Group results by category
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <>
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Search
        </h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          Find topics, forms, and procedures across the portal
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for topics, forms, or procedures..."
            className="w-full rounded-xl border border-zinc-200 bg-white py-4 pl-12 pr-4 text-base text-zinc-900 shadow-sm transition focus:border-[var(--sa-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--sa-navy)]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-[var(--sa-cream)] dark:focus:ring-[var(--sa-cream)]/20"
            aria-label="Search query"
            autoFocus
          />
        </div>
      </form>

      {/* Quick Search Tags */}
      {!hasSearched && (
        <div className="mb-8">
          <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {["BAH", "PCS", "JEPES", "Leave", "Awards", "Deployment", "Promotion", "TRICARE", "SGLI", "Retirement"].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-[var(--sa-navy)] hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-[var(--sa-cream)] dark:hover:text-zinc-900"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Count */}
      {hasSearched && query.length >= 2 && (
        <div className="mb-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {results.length === 0 ? (
              <>No results found for &quot;{query}&quot;</>
            ) : (
              <>
                Found <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{results.length}</span> result{results.length !== 1 && "s"} for &quot;{query}&quot;
              </>
            )}
          </p>
        </div>
      )}

      {/* No Results */}
      {hasSearched && query.length >= 2 && results.length === 0 && (
        <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
          <FileText className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-600" />
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            No results found for &quot;{query}&quot;
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            Try different keywords or browse by category
          </p>
        </div>
      )}

      {/* Query too short */}
      {hasSearched && query.length > 0 && query.length < 2 && (
        <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
          <p className="text-zinc-600 dark:text-zinc-400">
            Please enter at least 2 characters to search
          </p>
        </div>
      )}

      {/* Grouped Results */}
      {Object.entries(groupedResults).map(([category, categoryResults]) => {
        const CategoryIcon = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
        const categoryLabel = CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS];
        const categoryColor = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS];

        return (
          <div key={category} className="mb-8">
            {/* Category Header */}
            <div className="mb-4 flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${categoryColor}`}>
                <CategoryIcon className="h-4 w-4" />
              </div>
              <h2 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {categoryLabel}
              </h2>
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
                {categoryResults.length}
              </span>
            </div>

            {/* Results Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {categoryResults.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-[var(--sa-navy)]/30 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-[var(--sa-cream)]/30"
                >
                  <div className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-scarlet)] dark:text-[var(--sa-cream)] dark:group-hover:text-[var(--sa-gold)]">
                    {highlightMatch(result.title, query)}
                  </div>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {result.description}
                  </p>
                  <div className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
                    {result.section}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

function SearchFallback() {
  return (
    <>
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Search
        </h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          Find topics, forms, and procedures across the portal
        </p>
      </div>

      {/* Loading State */}
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--sa-navy)] dark:text-[var(--sa-cream)]" />
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--sa-cream)] via-white to-[var(--sa-gold)]/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Back Link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-[var(--sa-navy)] dark:text-zinc-400 dark:hover:text-[var(--sa-cream)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <Suspense fallback={<SearchFallback />}>
          <SearchContent />
        </Suspense>
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
