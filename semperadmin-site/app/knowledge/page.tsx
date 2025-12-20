"use client";
import Script from "next/script";
import Image from "next/image";

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      <Script id="silence-knowledge-logs" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `(() => { var noop = function(){}; ['log','info','debug','warn'].forEach(function(m){ try { console[m] = noop; } catch(e){} }); })();` }} />
      <header className="rounded-2xl ring-1 ring-black/5 bg-white/80 backdrop-blur p-6 shadow-sm dark:ring-white/10 dark:bg-black/50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/knowledge/KnowladgeApp/logo.png" alt="Semper Admin Logo" width={40} height={40} className="h-10 w-10 rounded-full ring-2 ring-[var(--sa-gold)]" />
            <div>
              <h1 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">USMC Directives Hub</h1>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">by Semper Admin</p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">Search and track Marine Corps Messages, Publications, and Forms</p>
      </header>

      <section className="rounded-2xl ring-1 ring-black/5 bg-white/80 backdrop-blur p-6 shadow-sm dark:ring-white/10 dark:bg-black/50" aria-label="Message type selection">
        <div className="message-type-tabs" role="tablist" aria-label="Message type tabs">
          <button className="message-type-btn active" data-type="maradmin" role="tab" aria-selected="true" aria-controls="results">MARADMINs <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="mcpub" role="tab" aria-selected="false" aria-controls="results">MCPUBs <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="almar" role="tab" aria-selected="false" aria-controls="results">ALMARs <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="alnav" role="tab" aria-selected="false" aria-controls="results">ALNAVs <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="secnav" role="tab" aria-selected="false" aria-controls="results">SECNAV <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="dodforms" role="tab" aria-selected="false" aria-controls="results">DoD Forms <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="dodfmr" role="tab" aria-selected="false" aria-controls="results">DoD FMR <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="igmc" role="tab" aria-selected="false" aria-controls="results">IGMC <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="youtube" role="tab" aria-selected="false" aria-controls="results">YouTube <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn" data-type="jtr" role="tab" aria-selected="false" aria-controls="results">JTR <span className="tab-counter" aria-label="0 messages">0</span></button>
          <button className="message-type-btn all-messages-btn" data-type="all" role="tab" aria-selected="false" aria-controls="results">All Messages <span className="tab-counter" aria-label="0 messages">0</span></button>
        </div>
      </section>

      <section className="rounded-2xl ring-1 ring-black/5 bg-white/80 backdrop-blur p-6 shadow-sm dark:ring-white/10 dark:bg-black/50">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative">
            <label htmlFor="searchInput" className="sr-only">Search messages</label>
            <input id="searchInput" type="text" placeholder="Search by ID, subject, or keywords..." aria-describedby="searchHelp" />
            <button id="clearSearch" aria-label="Clear search" className="clear-btn">✕</button>
            <span id="searchHelp" className="sr-only">Enter keywords to filter messages</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="quick-filters" role="group" aria-label="Quick date filters">
              <button className="quick-filter-btn active" data-days="1" aria-pressed="true">Today</button>
              <button className="quick-filter-btn" data-days="7" aria-pressed="false">This Week</button>
              <button className="quick-filter-btn" data-days="30" aria-pressed="false">This Month</button>
              <button className="quick-filter-btn" data-days="90" aria-pressed="false">Last 90 Days</button>
            </div>
            <label htmlFor="dateRange" className="sr-only">Date range filter</label>
            <select id="dateRange" aria-label="Select date range">
              <option value="1">Last 24 hours</option>
              <option value="7">Last 7 days</option>
              <option value="14">Last 14 days</option>
              <option value="30">Last 30 days</option>
              <option value="60">Last 60 days</option>
              <option value="90">Last 90 days</option>
              <option value="0">All messages</option>
            </select>
            <button id="resetFilters" className="reset-filters-btn" aria-label="Reset filters">Reset</button>
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-live="polite">
        <div id="status" className="rounded-2xl ring-1 ring-black/5 bg-white/80 backdrop-blur p-4 text-sm shadow-sm dark:ring-white/10 dark:bg-black/50" role="status">Loading cached data...</div>
        <div id="error" className="hidden rounded-2xl ring-1 ring-red-200 bg-red-50/90 p-4 text-sm text-red-900 shadow-sm dark:ring-white/15 dark:bg-black/50" role="alert" aria-live="assertive"></div>
        <div id="summaryStats" className="hidden rounded-2xl ring-1 ring-black/5 bg-white/80 backdrop-blur p-5 text-sm shadow-sm dark:ring-white/10 dark:bg-black/50"></div>
        <div id="results" className="rounded-2xl ring-1 ring-black/5 bg-white/80 backdrop-blur p-4 shadow-sm dark:ring-white/10 dark:bg-black/50" role="tabpanel" aria-label="Message results" tabIndex={-1}></div>
      </section>

      

      <Script src="/knowledge/KnowladgeApp/lib/fa-checklists.js" strategy="afterInteractive" />
      <Script src="/knowledge/KnowladgeApp/lib/secnav-data.js" strategy="afterInteractive" />
      <Script src="/knowledge/KnowladgeApp/lib/alnav-data.js" strategy="afterInteractive" />
      <Script src="/knowledge/KnowladgeApp/lib/youtube-data.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/web-vitals@3.5.0/dist/web-vitals.iife.js" strategy="afterInteractive" />
      <Script src="/knowledge/KnowladgeApp/app.js" strategy="afterInteractive" />
      <Script src="/knowledge/KnowladgeApp/pwa-init.js" strategy="afterInteractive" />
    </div>
  );
}
