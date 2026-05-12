"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, Loader2 } from "lucide-react";

/**
 * PDF letter builder. Loads @react-pdf/renderer dynamically to keep it out of
 * the initial bundle. Two seed templates: separation letter and counseling memo.
 */

interface FormState {
  template: "separation" | "counseling";
  toName: string;
  fromName: string;
  unit: string;
  date: string;
  body: string;
}

const DEFAULTS: FormState = {
  template: "separation",
  toName: "Marine, Cpl I.M.",
  fromName: "First Sergeant J. Q. Public",
  unit: "Admin Co, HQ Bn",
  date: new Date().toISOString().slice(0, 10),
  body:
    "This letter confirms your separation processing has been initiated. Report to S-1 with required records by 0900.",
};

export function PdfLetterBuilder() {
  const [form, setForm] = React.useState<FormState>(DEFAULTS);
  const [busy, setBusy] = React.useState(false);
  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const generate = async () => {
    setBusy(true);
    try {
      const { Document, Page, Text, View, StyleSheet, pdf } = await import("@react-pdf/renderer");
      const styles = StyleSheet.create({
        page: { padding: 56, fontFamily: "Helvetica", fontSize: 11 },
        header: { fontSize: 14, fontWeight: 700, marginBottom: 6 },
        meta: { marginBottom: 14, color: "#404350" },
        body: { lineHeight: 1.5, marginBottom: 14 },
        sig: { marginTop: 36 },
        rule: { borderBottom: 1, borderColor: "#C8102E", marginVertical: 8 },
      });
      const Doc = (
        <Document>
          <Page size="LETTER" style={styles.page}>
            <Text style={styles.header}>
              {form.template === "separation" ? "Separation Notification" : "Formal Counseling"}
            </Text>
            <View style={styles.rule} />
            <View style={styles.meta}>
              <Text>To: {form.toName}</Text>
              <Text>From: {form.fromName}</Text>
              <Text>Unit: {form.unit}</Text>
              <Text>Date: {form.date}</Text>
            </View>
            <Text style={styles.body}>{form.body}</Text>
            <View style={styles.sig}>
              <Text>{form.fromName}</Text>
              <Text>{form.unit}</Text>
            </View>
          </Page>
        </Document>
      );
      const blob = await pdf(Doc).toBlob();
      const { saveAs } = await import("file-saver");
      saveAs(blob, `${form.template}-letter.pdf`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>PDF letter builder</CardTitle>
          <Badge variant="muted">Lazy-loaded bundle</Badge>
        </div>
        <CardDescription>
          Pick a template, fill the fields, click Generate. The PDF lib loads on demand.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Template</span>
            <select
              value={form.template}
              onChange={(e) => update("template", e.target.value as FormState["template"])}
              className="h-9 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            >
              <option value="separation">Separation Notification</option>
              <option value="counseling">Formal Counseling</option>
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Date</span>
            <input
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className="h-9 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">To</span>
            <input
              value={form.toName}
              onChange={(e) => update("toName", e.target.value)}
              className="h-9 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">From</span>
            <input
              value={form.fromName}
              onChange={(e) => update("fromName", e.target.value)}
              className="h-9 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="mb-1 block font-semibold">Unit</span>
            <input
              value={form.unit}
              onChange={(e) => update("unit", e.target.value)}
              className="h-9 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="mb-1 block font-semibold">Body</span>
            <textarea
              value={form.body}
              onChange={(e) => update("body", e.target.value)}
              rows={5}
              className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] p-2 text-sm"
            />
          </label>
        </div>
        <Button onClick={generate} disabled={busy}>
          {busy ? <Loader2 className="size-4 animate-spin" /> : <FileDown className="size-4" />}
          {busy ? "Generating." : "Generate PDF"}
        </Button>
      </CardContent>
    </Card>
  );
}
