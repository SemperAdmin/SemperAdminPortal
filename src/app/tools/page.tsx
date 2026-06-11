import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Client-side calculators, external cloud.gov apps, and document generators. No data leaves your browser.",
};

export default function Page() {
  return <PageClient />;
}
