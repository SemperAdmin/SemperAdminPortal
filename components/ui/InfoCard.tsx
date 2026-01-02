import React from "react";

export type InfoCardVariant = "default" | "warning" | "success" | "info" | "danger" | "tip";

interface InfoCardProps {
  icon?: React.ElementType;
  title?: string;
  children: React.ReactNode;
  variant?: InfoCardVariant;
  className?: string;
}

const variants: Record<InfoCardVariant, string> = {
  default: "border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20",
  warning: "border-amber-500/40 bg-amber-500/10 dark:bg-amber-500/20",
  success: "border-green-500/40 bg-green-500/10 dark:bg-green-500/20",
  info: "border-blue-500/40 bg-blue-500/10 dark:bg-blue-500/20",
  danger: "border-red-500/40 bg-red-500/10 dark:bg-red-500/20",
  tip: "border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/20",
};

export function InfoCard({
  icon: Icon,
  title,
  children,
  variant = "default",
  className = "",
}: InfoCardProps) {
  return (
    <div className={`rounded-lg border p-4 ${variants[variant]} ${className}`}>
      {(Icon || title) && (
        <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {Icon && <Icon className="h-5 w-5" />}
          {title}
        </div>
      )}
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </div>
  );
}
