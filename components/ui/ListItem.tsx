"use client";

type BulletColor = "red" | "zinc" | "green" | "blue" | "amber";

type Props = {
  children: React.ReactNode;
  color?: BulletColor;
};

const colorClasses: Record<BulletColor, string> = {
  red: "bg-[var(--sa-red)]",
  zinc: "bg-zinc-400",
  green: "bg-green-500",
  blue: "bg-blue-500",
  amber: "bg-amber-500",
};

export function ListItem({ children, color = "red" }: Props) {
  return (
    <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${colorClasses[color]}`} />
      {children}
    </li>
  );
}
