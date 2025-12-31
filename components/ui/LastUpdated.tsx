"use client";

import { Calendar, FileText } from "lucide-react";

type Props = {
  /** Date string (e.g., "December 2025", "Jan 2025") */
  date: string;
  /** Governing authority/order (e.g., "MCO 1616.1") */
  authority?: string;
  /** Optional URL for the authority reference */
  authorityUrl?: string;
};

/**
 * LastUpdated component displays content currency and governing authority.
 * Helps users trust the information is current and know where to verify.
 *
 * @example
 * <LastUpdated date="December 2025" authority="MCO 1616.1" />
 * <LastUpdated
 *   date="Jan 2025"
 *   authority="MCO 1751.3"
 *   authorityUrl="https://www.marines.mil/..."
 * />
 */
export function LastUpdated({ date, authority, authorityUrl }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Last updated: {date}</span>
      </span>
      {authority && (
        <>
          <span className="text-zinc-300 dark:text-zinc-600" aria-hidden="true">|</span>
          <span className="inline-flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            {authorityUrl ? (
              <a
                href={authorityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sa-red)] hover:underline"
              >
                Authority: {authority}
              </a>
            ) : (
              <span>Authority: {authority}</span>
            )}
          </span>
        </>
      )}
    </div>
  );
}
