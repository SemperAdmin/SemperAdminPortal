import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Video walkthroughs of USMC admin processes, organized by series.",
};

export default function Page() {
  return <PageClient />;
}
