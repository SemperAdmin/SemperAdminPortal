import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "History",
  description:
    "Pages you opened recently on this device. For portal changes, see What changed.",
};

export default function Page() {
  return <PageClient />;
}
