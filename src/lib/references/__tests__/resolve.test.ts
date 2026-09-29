import { describe, expect, it } from "vitest";
import {
  collapseRevision,
  getCitationIndex,
  resolveReference,
  splitCompoundReference,
} from "@/lib/references/resolve";

describe("collapseRevision", () => {
  it("collapses a trailing revision letter", () => {
    expect(collapseRevision("MCO P1020.34H")).toBe("MCO P1020.34_");
    expect(collapseRevision("JAGINST 5800.7F")).toBe("JAGINST 5800.7_");
  });

  it("gives a bare number the same base slot", () => {
    expect(collapseRevision("MCO 1700.28")).toBe("MCO 1700.28_");
    expect(collapseRevision("MCBUL 5420")).toBe("MCBUL 5420_");
  });

  it("keeps an embedded letter and collapses only the final one", () => {
    expect(collapseRevision("MCO 1001R.1L")).toBe("MCO 1001R.1_");
    expect(collapseRevision("MCO 1001R.1")).toBe("MCO 1001R.1_");
  });

  it("leaves types without letter revisions literal", () => {
    expect(collapseRevision("DODI 1332.30")).toBe("DODI 1332.30");
    expect(collapseRevision("MARADMIN 022/25")).toBe("MARADMIN 022/25");
    expect(collapseRevision("MCO")).toBe("MCO");
  });
});

describe("splitCompoundReference", () => {
  it("splits at each document type and keeps each tail", () => {
    expect(
      splitCompoundReference("DoDI 1000.04, 3.1.b(1), MCO 1742.1C, par 4b(4)(a)")
    ).toEqual(["DoDI 1000.04, 3.1.b(1)", "MCO 1742.1C, par 4b(4)(a)"]);
    expect(splitCompoundReference("MCO 1300.8 and MCO 1320.11")).toEqual([
      "MCO 1300.8",
      "MCO 1320.11",
    ]);
    expect(
      splitCompoundReference("DODFMR Vol. 5 Ch. 2 & 5, FPM Vol 3 Ch.2, MCO 4650.39A Ch. 2")
    ).toEqual(["DODFMR Vol. 5 Ch. 2 & 5", "FPM Vol 3 Ch.2", "MCO 4650.39A Ch. 2"]);
  });

  it("keeps volume, chapter, and paragraph lists whole", () => {
    expect(splitCompoundReference("MCO 5800.16, Vol. 8 Para 4b")).toEqual([
      "MCO 5800.16, Vol. 8 Para 4b",
    ]);
    expect(splitCompoundReference("FPM Vol. 1 Ch. 5, 6, 7, 8, 9, 11, 12, & 17")).toEqual([
      "FPM Vol. 1 Ch. 5, 6, 7, 8, 9, 11, 12, & 17",
    ]);
  });

  it("never splits inside parentheses", () => {
    const ref =
      "MCO 5800.16 Chapter 4 paragraph 040907(B) (Rights Understanding and DD Form 2701)";
    expect(splitCompoundReference(ref)).toEqual([ref]);
  });
});

describe("resolveReference", () => {
  const index = getCitationIndex();

  it("prefers an exact alias over the revision wildcard", () => {
    const exactKey = Object.keys(index.byAlias).find((key) => collapseRevision(key) !== key);
    expect(exactKey).toBeDefined();
    if (!exactKey) return;
    expect(resolveReference(exactKey)?.id).toBe(index.byAlias[exactKey]);
  });

  it("maps an unlisted revision letter to the series entry", () => {
    const base = Object.keys(index.byBase).find((key) => key.startsWith("MCO ") && key.split(" ").length === 2);
    expect(base).toBeDefined();
    if (!base) return;
    const unlisted = base.replace(/_$/, "Z");
    expect(index.byAlias[unlisted]).toBeUndefined();
    expect(resolveReference(unlisted)?.id).toBe(index.byBase[base]);
  });

  it("resolves a compound reference whose first document is unregistered", () => {
    const base = Object.keys(index.byBase).find((key) => key.startsWith("MCO ") && key.split(" ").length === 2);
    if (!base) return;
    const cite = base.replace(/_$/, "Z");
    expect(resolveReference("Unregistered Handbook 12, and " + cite)?.id).toBe(index.byBase[base]);
  });
});
