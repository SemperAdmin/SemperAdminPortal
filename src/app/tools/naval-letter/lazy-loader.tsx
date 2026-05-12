"use client";
import dynamic from "next/dynamic";

export const NavalLetterBuilderLazy = dynamic(
  () =>
    import("@/components/domain/naval-letter-builder").then(
      (m) => m.NavalLetterBuilder
    ),
  { ssr: false, loading: () => <p className="text-sm">Loading builder.</p> }
);
