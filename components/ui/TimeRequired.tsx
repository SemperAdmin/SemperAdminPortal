"use client";

import { Clock } from "lucide-react";

type Props = {
  /** Time estimate (e.g., "15 minutes", "1-2 hours", "30 min") */
  time: string;
  /** Optional label override (defaults to "Estimated") */
  label?: string;
  /** Size variant */
  size?: "sm" | "md";
};

/**
 * TimeRequired badge displays estimated time to complete a task.
 * Helps users set expectations before starting a process.
 *
 * @example
 * <TimeRequired time="15 minutes" />
 * <TimeRequired time="1-2 hours" label="Processing time" />
 */
export function TimeRequired({ time, label = "Estimated", size = "sm" }: Props) {
  const sizeClasses = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3 py-1.5",
  };

  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 font-medium dark:bg-blue-900/30 dark:text-blue-300 ${sizeClasses[size]}`}
    >
      <Clock className={iconSize} aria-hidden="true" />
      <span>
        <span className="text-blue-600 dark:text-blue-400">{label}:</span> {time}
      </span>
    </span>
  );
}
