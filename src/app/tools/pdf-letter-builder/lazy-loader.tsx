"use client";
import dynamic from "next/dynamic";

export const PdfLetterBuilderLazy = dynamic(
  () => import("@/components/domain/pdf-letter-builder").then((m) => m.PdfLetterBuilder),
  { ssr: false, loading: () => <p className="text-sm">Loading builder.</p> }
);
