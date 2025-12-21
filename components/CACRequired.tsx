import type { ReactNode } from "react";

type CACRequiredProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
  alt?: string;
  right?: ReactNode;
  svgLeft?: ReactNode;
};

export default function CACRequired({ title = "CAC Enabled", description = "This action requires Common Access Card (CAC) authentication.", imageSrc, alt = "CAC identification", right, svgLeft }: CACRequiredProps) {
  return (
    <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</h2>
        <span className="rounded-full border border-black/10 bg-[var(--sa-cream)]/60 px-3 py-1 text-xs font-bold text-[var(--sa-navy)] dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">CAC Required</span>
      </div>
      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          {svgLeft ? (
            svgLeft
          ) : imageSrc ? (
            <img src={imageSrc} alt={alt} className="h-auto w-full max-w-[250px] object-contain" />
          ) : (
            <svg width="250" height="400" viewBox="0 0 250 400" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full max-w-[250px]">
              <rect x="10" y="10" width="230" height="380" rx="15" fill="#f8f9fa" stroke="#d1d1ca" strokeWidth="2" />
              <path d="M10 25 Q10 10 25 10 L225 10 Q240 10 240 25 L240 60 L10 60 Z" fill="#2c3e50" />
              <text x="125" y="40" fontFamily="Arial, sans-serif" fontSize="14" fill="white" fontWeight="bold" textAnchor="middle">IDENTIFICATION CARD</text>
              <rect x="75" y="80" width="100" height="120" rx="5" fill="#e9ecef" stroke="#ced4da" />
              <circle cx="125" cy="125" r="22" fill="#adb5bd" />
              <path d="M90 190 Q125 155 160 190" fill="#adb5bd" />
              <rect x="100" y="215" width="50" height="40" rx="4" fill="#d4af37" />
              <rect x="105" y="220" width="10" height="30" fill="#b8860b" opacity="0.5" />
              <rect x="120" y="220" width="10" height="30" fill="#b8860b" opacity="0.5" />
              <rect x="135" y="220" width="10" height="30" fill="#b8860b" opacity="0.5" />
              <line x1="100" y1="235" x2="150" y2="235" stroke="#b8860b" strokeWidth="1" />
              <rect x="45" y="275" width="160" height="8" rx="4" fill="#dee2e6" />
              <rect x="55" y="295" width="140" height="8" rx="4" fill="#dee2e6" />
              <rect x="50" y="315" width="150" height="8" rx="4" fill="#dee2e6" />
              <rect x="40" y="345" width="170" height="25" fill="#333" opacity="0.1" />
              <g fill="#333">
                <rect x="50" y="350" width="2" height="15" />
                <rect x="55" y="350" width="4" height="15" />
                <rect x="63" y="350" width="1" height="15" />
                <rect x="67" y="350" width="3" height="15" />
                <rect x="75" y="350" width="2" height="15" />
                <rect x="80" y="350" width="5" height="15" />
                <rect x="90" y="350" width="2" height="15" />
                <rect x="97" y="350" width="1" height="15" />
                <rect x="105" y="350" width="3" height="15" />
                <rect x="115" y="350" width="2" height="15" />
                <rect x="122" y="350" width="4" height="15" />
                <rect x="130" y="350" width="1" height="15" />
                <rect x="140" y="350" width="5" height="15" />
                <rect x="155" y="350" width="2" height="15" />
                <rect x="165" y="350" width="3" height="15" />
                <rect x="180" y="350" width="4" height="15" />
                <rect x="195" y="350" width="2" height="15" />
              </g>
              <circle cx="125" cy="200" r="80" fill="none" stroke="#2c3e50" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.1" />
            </svg>
          )}
        </div>
        <div className="space-y-3">
          {right ?? (
            <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 text-sm text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-300">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sign in with CAC</div>
              <p className="mt-1">Access to this resource requires CAC authentication. Insert your card and follow the prompts.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

