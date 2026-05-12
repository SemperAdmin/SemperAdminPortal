"use client";
import dynamic from "next/dynamic";

export const DocxExportButtonLazy = dynamic(
  () => import("@/components/domain/docx-export-button").then((m) => m.DocxExportButton),
  { ssr: false, loading: () => <p className="text-sm">Loading exporter.</p> }
);
