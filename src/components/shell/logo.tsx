import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /** Show the wordmark next to the crest. Hide on tight nav contexts. */
  wordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_PX: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 28,
  md: 36,
  lg: 56,
};

export function Logo({ wordmark = true, size = "md", className }: LogoProps) {
  const px = SIZE_PX[size];
  return (
    <Link
      href="/"
      aria-label="Semper Admin Portal home"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-[var(--radius-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2",
        className
      )}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.jpg`}
        alt=""
        width={px}
        height={px}
        priority
        className="rounded-sm"
        style={{ width: px, height: px, objectFit: "contain" }}
      />
      {wordmark && (
        <span
          className="font-bold tracking-wide"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: size === "lg" ? "1.5rem" : size === "md" ? "1.125rem" : "1rem",
          }}
        >
          Semper Admin
        </span>
      )}
    </Link>
  );
}
