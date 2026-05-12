import { NavalLetterBuilderLazy } from "./lazy-loader";

export const metadata = {
  title: "Naval letter builder",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Naval letter builder
      </h1>
      <p className="mt-1 text-[var(--color-muted-foreground)]">
        SECNAV M-5216.5 formatted Marine Corps naval letter, generated as an editable docx.
      </p>
      <div className="mt-6">
        <NavalLetterBuilderLazy />
      </div>
    </div>
  );
}
