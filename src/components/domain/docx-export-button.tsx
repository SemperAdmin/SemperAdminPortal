"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, Loader2 } from "lucide-react";

interface FormState {
  template: "counseling" | "memo";
  marine: string;
  rank: string;
  unit: string;
  date: string;
  body: string;
}

const DEFAULTS: FormState = {
  template: "counseling",
  marine: "Smith, John",
  rank: "Cpl",
  unit: "Admin Co, HQ Bn",
  date: new Date().toISOString().slice(0, 10),
  body:
    "Counseling addresses sustained performance gap in administrative submissions. Path to standard requires three on-time submissions across consecutive pay periods.",
};

export function DocxExportButton() {
  const [form, setForm] = React.useState<FormState>(DEFAULTS);
  const [busy, setBusy] = React.useState(false);
  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const generate = async () => {
    setBusy(true);
    try {
      const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = await import("docx");
      const title =
        form.template === "counseling" ? "Formal Counseling" : "Administrative Memorandum";
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: title, bold: true })],
              }),
              new Paragraph({ text: "" }),
              new Paragraph({ children: [new TextRun({ text: `Marine: ${form.rank} ${form.marine}`, bold: true })] }),
              new Paragraph({ text: `Unit: ${form.unit}` }),
              new Paragraph({ text: `Date: ${form.date}` }),
              new Paragraph({ text: "" }),
              new Paragraph({ text: form.body }),
              new Paragraph({ text: "" }),
              new Paragraph({ text: "Marine signature: ____________________" }),
              new Paragraph({ text: "Counselor signature: ___________________" }),
            ],
          },
        ],
      });
      const blob = await Packer.toBlob(doc);
      const { saveAs } = await import("file-saver");
      saveAs(blob, `${form.template}-${form.marine.replace(/\W+/g, "_")}.docx`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>DOCX exporter</CardTitle>
          <Badge variant="muted">Lazy-loaded bundle</Badge>
        </div>
        <CardDescription>
          Generates an editable Word document. Useful for forms that route through O365 or Google Docs.
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
              <option value="counseling">Counseling form</option>
              <option value="memo">Memorandum</option>
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
            <span className="mb-1 block font-semibold">Rank</span>
            <input
              value={form.rank}
              onChange={(e) => update("rank", e.target.value)}
              className="h-9 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Marine</span>
            <input
              value={form.marine}
              onChange={(e) => update("marine", e.target.value)}
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
          {busy ? "Generating." : "Generate DOCX"}
        </Button>
      </CardContent>
    </Card>
  );
}
