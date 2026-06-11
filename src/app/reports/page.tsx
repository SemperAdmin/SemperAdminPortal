import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Reports",
  description:
    "Authoritative report catalog for S-1 shops and command teams, grouped by function with cadence and audience filters.",
};

export default function Page() {
  return <PageClient />;
}
