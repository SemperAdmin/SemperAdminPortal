## Summary

<!-- One sentence on what this PR changes and why. -->

## Type of change

- [ ] Code (component, hook, lib, build script)
- [ ] Content (policy, situation, snippet, video, reference, tool, citation)
- [ ] Infrastructure (CI, deploy, dependency, security)
- [ ] Documentation only

## Role scope

If this PR touches role-tagged content or routes, list affected roles:

- [ ] marine
- [ ] leader
- [ ] commander
- [ ] admin

## Pre-flight checklist

- [ ] Frontmatter passes zod validation (`npm run content:sync` clean).
- [ ] `lastVerified` reflects a real source check (not a no-op refresh).
- [ ] Citations use the registry (`Citation` chips and `ReferencePill`).
- [ ] No banned words, em-dashes, semicolons, or asterisks in user-facing copy.
- [ ] Tokens from `globals.css`, no hardcoded hex.
- [ ] Pill (not Badge), PageHeader (not custom), Callout for asides.
- [ ] `npm run lint` clean.
- [ ] `npm run type-check` clean.
- [ ] `npm run build` clean.

## Sources cited

<!-- For content PRs, list the MCO, MARADMIN, NAVMC, or DoDI numbers
backing every new claim. One source per line. -->

-

## Risk and rollback

<!-- What breaks if this regresses, and what is the rollback path? -->
