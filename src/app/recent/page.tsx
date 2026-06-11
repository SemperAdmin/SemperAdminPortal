import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Recently viewed",
  description:
    "Pages you opened recently on this device.",
};

export default function Page() {
  return <PageClient />;
}
