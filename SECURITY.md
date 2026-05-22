# Security Policy

> **Status: Proof of Concept.** This repository is a personal subject-matter-expert project, not an official Marine Corps product. The content is not authoritative for pay, records, leave, separation, or any other administrative decision. Every claim is sourced from public MCO and MARADMIN material via citation chips, and contributors are individual SMEs acting in their personal capacity, not as government employees in official capacity. Verify against the underlying source before relying on anything here.

## Reporting a Vulnerability

Report suspected vulnerabilities through GitHub Private Vulnerability Reporting (PVR).

1. Go to https://github.com/furby203824/SemperAdminPortal/security/advisories/new
2. Select Report a vulnerability.
3. Describe the issue, affected version or commit SHA, reproduction steps, and impact.
4. Include any proof-of-concept artifacts as attachments.

Do not file public issues or pull requests for security-sensitive reports. Public posts cause exposure before a fix is in place.

## Scope

In scope.

- The Next.js application source under `src/`.
- Build and deploy scripts under `scripts/` and `.github/workflows/`.
- Generated artifacts under `out/` produced by `npm run build`.
- Content authoring infrastructure, schemas, and the citations registry.

Out of scope.

- Upstream advisories for direct or transitive npm dependencies. Report those to the relevant upstream and open a PR here to bump the pin once a fix lands.
- Issues in the live GitHub Pages hosting platform itself. Report those to GitHub.
- Content correctness disputes. Open a normal issue with the source citation.

## Supported Versions

The portal ships as a static export from the `main` branch. Only the current `main` HEAD receives security fixes. Older deployed snapshots are not patched in place.

## Disclosure Window

The maintainers aim to acknowledge a report within 7 days and to publish a fix or mitigation within 90 days. Public disclosure follows the fix, coordinated with the reporter.

## Vetting Posture

- CI runs `npm audit --audit-level=moderate --omit=dev` as a blocking gate.
- CI runs a regex secret scan on every push to `main`.
- CI generates a CycloneDX SBOM and signs it with Cosign (keyless, Sigstore).
- Dependabot opens weekly PRs against npm, pip, and GitHub Actions ecosystems.

## Authoritative Files

- `.github/workflows/deploy.yml` defines the build and deploy pipeline, including the security gates above.
- `.github/dependabot.yml` defines the SCA cadence.
- `src/lib/security/audit-log.ts` documents the audit-log retention gap. Backend persistence is required before any DoD AU-11 claim.
- `src/lib/security/cac-auth.ts` is a typed stub. CAC authentication is not enforced in the current static deployment.

## Notes for DoD Reviewers

This repository hosts a public reference portal on GitHub Pages. It does not handle CUI, does not authenticate users, and does not store user data. Any move to a government network or to CUI handling requires a separate RMF assessment per DoDI 8510.01.
