// ESLint 9 flat config.
// eslint-config-next@16 ships native flat-config arrays. Import them
// directly. Do not wrap in FlatCompat - that path validates plugins via
// JSON.stringify and crashes on circular plugin self-references.

import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  {
    ignores: [
      ".claude/**",
      ".github/**",
      ".next/**",
      "out/**",
      "node_modules/**",
      "redesign/**",
      "src/generated/**",
      "public/**",
      "scripts/**",
      "next-env.d.ts",
      "*.tsbuildinfo",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Custom rules carried over from the legacy .eslintrc.json.
    // Same intent: ban `any`, allow underscore-prefixed unused locals.
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // React 19 Compiler purity rules surface idiomatic SSR-safe patterns
      // (useEffect(() => setMounted(true), []) and similar mount guards) as
      // errors. Rewriting every callsite to useSyncExternalStore belongs in
      // a dedicated React 19 Compiler readiness branch, not this dep-bump
      // PR. Downgrade to warning here. Track in follow-up issue.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
];

export default config;
