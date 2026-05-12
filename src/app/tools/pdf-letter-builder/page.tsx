import { PdfLetterBuilderLazy } from "./lazy-loader";

export const metadata = {
  title: "PDF letter builder",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        PDF letter builder
      </h1>
      <p className="mt-1 text-[var(--color-muted-foreground)]">
        Generates a personalized administrative letter as a styled PDF.
      </p>
      <div className="mt-6">
        <PdfLetterBuilderLazy />
      </div>
    </div>
  );
}
