export const meta = {
  name: "tdd",
  description: "Red-Green-Refactor TDD cycle for SemperAdminPortal features",
  phases: [
    { title: "Setup", detail: "Verify Vitest infrastructure is installed" },
    { title: "Red", detail: "QA Engineer writes a failing test" },
    { title: "Green", detail: "Software Engineer writes minimal code to pass" },
    { title: "Refactor", detail: "Code Reviewer cleans up without breaking green" },
  ],
};

// ─── Schemas ─────────────────────────────────────────────────────────────────

const SETUP_SCHEMA = {
  type: "object",
  properties: {
    ready: { type: "boolean" },
    action: { type: "string" },
  },
  required: ["ready", "action"],
};

const TEST_SCHEMA = {
  type: "object",
  properties: {
    testFilePath: { type: "string" },
    testFileContent: { type: "string" },
    componentUnderTest: { type: "string" },
    rationale: { type: "string" },
  },
  required: ["testFilePath", "testFileContent", "componentUnderTest", "rationale"],
};

const IMPL_SCHEMA = {
  type: "object",
  properties: {
    sourceFilePath: { type: "string" },
    sourceFileContent: { type: "string" },
    explanation: { type: "string" },
  },
  required: ["sourceFilePath", "sourceFileContent", "explanation"],
};

const REFACTOR_SCHEMA = {
  type: "object",
  properties: {
    sourceFilePath: { type: "string" },
    refactoredContent: { type: "string" },
    changes: { type: "array", items: { type: "string" } },
  },
  required: ["sourceFilePath", "refactoredContent", "changes"],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function runTests(testFilePath) {
  return agent(
    `Run the test suite for the file at path "${testFilePath}".
Use the Bash tool to execute: npm run test -- ${testFilePath}
Return the complete stdout and stderr output, the exit code (0 = pass, non-zero = fail), and a one-line summary of what failed or passed.
Return raw results only — no explanation or suggestions.`,
    {
      label: `run-tests:${testFilePath.split("/").pop()}`,
      schema: {
        type: "object",
        properties: {
          exitCode: { type: "number" },
          output: { type: "string" },
          summary: { type: "string" },
        },
        required: ["exitCode", "output", "summary"],
      },
    }
  );
}

async function writeFile(filePath, content) {
  return agent(
    `Write exactly this content to the file at path "${filePath}". Do not modify the content at all.

\`\`\`
${content}
\`\`\`

Use the Write tool (or Edit if the file already exists). Confirm the write succeeded.`,
    { label: `write:${filePath.split("/").pop()}` }
  );
}

// ─── Phase 0: Setup Check ────────────────────────────────────────────────────

phase("Setup");

const setup = await agent(
  `You are setting up the test environment for SemperAdminPortal at D:/Coding/SemperAdminPortal.

Check if Vitest is installed by reading package.json at D:/Coding/SemperAdminPortal/package.json.
Look for "vitest" in devDependencies.

If vitest IS present:
- Return { ready: true, action: "already installed" }

If vitest is NOT present:
- Run: cd D:/Coding/SemperAdminPortal && npm install --save-dev vitest @vitest/ui @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom @vitejs/plugin-react
- Return { ready: true, action: "installed vitest and RTL" }`,
  { label: "setup-check", phase: "Setup", schema: SETUP_SCHEMA }
);

if (!setup || !setup.ready) {
  log("Setup failed — cannot continue");
  return { error: "Setup failed", detail: setup };
}

log(`Setup: ${setup.action}`);

// ─── Phase 1: RED ────────────────────────────────────────────────────────────

phase("Red");

const feature = args?.feature ?? "Add a placeholder component";

const testResult = await agent(
  `You are a QA Automation Engineer. Your ONLY job is to write a failing test.

FEATURE REQUEST:
${feature}

PROJECT CONTEXT:
- Stack: Next.js 15 App Router, React 19, TypeScript strict, Tailwind 4, Zustand 5
- Test runner: Vitest with React Testing Library
- Path alias: @/* maps to src/*
- Zustand store: @/lib/store/role-store — exports useRoleStore(s => s.role)
- No Supabase, no fetch calls — pure client-side

RULES:
1. Write ONE test file only. No application code.
2. Place file at __tests__/<descriptive-slug>.test.tsx inside D:/Coding/SemperAdminPortal/
3. Use vitest imports: import { describe, it, expect, vi, beforeEach } from "vitest"
4. Use RTL: import { render, screen } from "@testing-library/react"
5. Mock Zustand store with vi.mock("@/lib/store/role-store", ...) at module level
6. Use accessible queries: screen.getByRole(...) — never getByTestId
7. Use screen.findByRole (async) for components with useEffect/state
8. Test must target a component that does NOT yet exist — it must fail because the component is missing or incomplete
9. Import the component from its expected future path (e.g., @/components/domain/my-component)

OUTPUT: Return the test file path and full file content.`,
  { label: "red-write-test", phase: "Red", schema: TEST_SCHEMA }
);

if (!testResult) {
  log("RED phase failed — no test produced");
  return { error: "Red phase failed" };
}

log(`RED: Writing test to ${testResult.testFilePath}`);
await writeFile(testResult.testFilePath, testResult.testFileContent);

// Verify the test actually fails
const redRun = await runTests(testResult.testFilePath);
if (!redRun) {
  log("RED: Could not run test");
  return { error: "Could not run test", testFilePath: testResult.testFilePath };
}

if (redRun.exitCode === 0) {
  log("RED: Test passed immediately — rewriting to ensure it targets missing code");
  const rewrite = await agent(
    `The test at ${testResult.testFilePath} passed immediately, which means it is not testing anything new.

Test content:
${testResult.testFileContent}

Test output:
${redRun.output}

Rewrite the test so it imports a component from a path that does not yet exist or calls a function that is not yet implemented.
The test must fail because the implementation is missing — not because of a syntax error.

Return the same file path with updated content.`,
    { label: "red-rewrite", phase: "Red", schema: TEST_SCHEMA }
  );
  if (rewrite) {
    await writeFile(rewrite.testFilePath, rewrite.testFileContent);
    const recheck = await runTests(rewrite.testFilePath);
    if (recheck && recheck.exitCode === 0) {
      log("RED: Could not produce a failing test after rewrite — halting");
      return { error: "Could not produce red test" };
    }
  }
}

log(`RED confirmed. Failure: ${redRun?.summary ?? "unknown"}`);

// ─── Phase 2: GREEN ──────────────────────────────────────────────────────────

phase("Green");

let greenOutput = null;
let attempt = 0;
let lastError = redRun?.output ?? "";
let implFilePath = "";

while (attempt < 3) {
  attempt++;
  log(`GREEN attempt ${attempt}/3`);

  const impl = await agent(
    `You are a Software Engineer. Your ONLY job is to make the failing test pass with MINIMUM code.

TEST FILE: ${testResult.testFilePath}
TEST CONTENT:
${testResult.testFileContent}

FAILING OUTPUT (attempt ${attempt}):
${lastError}

COMPONENT EXPECTED AT: ${testResult.componentUnderTest ?? "see import in test file"}

RULES:
1. Write ONE source file only. Do not modify the test file.
2. Write minimum code to satisfy the test — no extra props, no extra logic.
3. Use TypeScript strict. No any. No as unknown as X without a comment.
4. Use Tailwind CSS tokens from globals.css. No hardcoded hex colors.
5. If the test mocks useRoleStore, your component should call useRoleStore to get role state.
6. Export the component as a named export matching the import in the test.
7. If the component is in src/components/, use the naming convention: lowercase-with-hyphens.tsx

Return the exact file path and full content of the source file to create.`,
    { label: `green-attempt-${attempt}`, phase: "Green", schema: IMPL_SCHEMA }
  );

  if (!impl) break;
  implFilePath = impl.sourceFilePath;

  await writeFile(impl.sourceFilePath, impl.sourceFileContent);
  greenOutput = await runTests(testResult.testFilePath);

  if (!greenOutput) break;
  if (greenOutput.exitCode === 0) {
    log(`GREEN confirmed on attempt ${attempt}. ${greenOutput.summary}`);
    break;
  }
  lastError = greenOutput.output;
  log(`GREEN attempt ${attempt} still red: ${greenOutput.summary}`);
}

if (!greenOutput || greenOutput.exitCode !== 0) {
  log("GREEN phase failed after 3 attempts — surfacing error");
  return {
    error: "Could not make test pass",
    testFilePath: testResult.testFilePath,
    lastOutput: lastError,
  };
}

// ─── Phase 3: REFACTOR ───────────────────────────────────────────────────────

phase("Refactor");

const refactor = await agent(
  `You are a Senior Code Reviewer. Tests are green. Clean up the implementation WITHOUT changing behavior.

TEST FILE: ${testResult.testFilePath}
IMPLEMENTATION FILE: ${implFilePath}

Read both files. Review the implementation for:
1. TypeScript: remove any type assertions, improve type inference
2. Accessibility: every interactive element needs proper ARIA role or semantic HTML
3. Tailwind: use CSS tokens (var(--color-*)) — no hardcoded hex values
4. Naming: component name matches filename, props interface named [ComponentName]Props
5. Dead code: remove unused imports, unused variables
6. Comments: remove obvious comments, keep only non-obvious WHY comments

Produce the refactored source file. Do NOT change the test file. Do NOT change observable behavior.`,
  { label: "refactor", phase: "Refactor", schema: REFACTOR_SCHEMA }
);

if (refactor) {
  await writeFile(refactor.sourceFilePath, refactor.refactoredContent);

  const finalRun = await runTests(testResult.testFilePath);
  if (!finalRun || finalRun.exitCode !== 0) {
    log("REFACTOR broke the test — rolling back");
    await agent(
      `The refactored file at ${refactor.sourceFilePath} broke the tests. Read the file and the test output below, then restore the file to a passing state.

Test output:
${finalRun?.output ?? "unknown"}

Rewrite the file to pass the test.`,
      { label: "refactor-fix", phase: "Refactor" }
    );
  } else {
    log(`REFACTOR complete. Changes: ${(refactor.changes ?? []).join(", ")}`);
  }
}

// ─── Summary ─────────────────────────────────────────────────────────────────

return {
  status: "complete",
  cycle: "red-green-refactor",
  testFile: testResult.testFilePath,
  implFile: implFilePath,
  feature,
  greenAttempts: attempt,
};
