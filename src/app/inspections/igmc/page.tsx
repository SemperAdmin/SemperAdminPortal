import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "IGMC Inspections",
  description:
    "Functional area checklists from the Inspector General of the Marine Corps. Filter by sponsor or search by program number.",
};

export default function Page() {
  return <PageClient />;
}
