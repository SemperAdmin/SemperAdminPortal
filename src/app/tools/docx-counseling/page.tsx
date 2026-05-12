import { DocxExportButtonLazy } from "./lazy-loader";

export const metadata = {
  title: "DOCX counseling",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        DOCX counseling form
      </h1>
      <p className="mt-1 text-[var(--color-muted-foreground)]">
        Generates an editable Word document for counseling and memo workflows.
      </p>
      <div className="mt-6">
        <DocxExportButtonLazy />
      </div>
    </div>
  );
}
