import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Curated external resources, tools, and references for USMC admin work.",
};

export default function Page() {
  return <PageClient />;
}
