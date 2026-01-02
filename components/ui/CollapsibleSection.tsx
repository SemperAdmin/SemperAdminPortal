"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Color theme for the icon background. Defaults to "rose" */
  iconColor?: "rose" | "blue" | "amber" | "emerald" | "purple" | "zinc";
}

const iconColorStyles = {
  rose: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
  blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  zinc: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = false,
  iconColor = "rose",
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-3 p-4 text-left hover:bg-[var(--sa-cream)]/30 dark:hover:bg-white/5"
      >
        {icon && (
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconColorStyles[iconColor]}`}>
            {icon}
          </div>
        )}
        <span className="flex-1 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {title}
        </span>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-zinc-400" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-black/5 p-6 dark:border-white/15">
          {children}
        </div>
      )}
    </div>
  );
}
