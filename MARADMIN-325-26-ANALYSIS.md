# MARADMIN 325/26 Applicability Analysis and Build Plan

Analyzed 2026-07-21. Subject: Announcement of the Enterprise Artificial Intelligence, Data, and Software (ADS) Information Resource Manual (IRM). Signed by Lieutenant General J.A. Matos III, DC I. Status: analysis only, build deferred by owner decision.

## Verdict

Applicable. The MARADMIN lands inside a content cluster the portal already runs. The portal holds 11 AI and data pages under `/marines`, plus an explicit "MARADMIN Ecosystem" list on the overview page. 325/26 carries the same signing authority (DC I) as the pages already in the cluster. It extends the enterprise-platform picture two of those pages describe. It is a new member of an existing family, not a new domain.

## What the MARADMIN covers

- Announces the ADS Information Resource Manual (IRM), a new reference manual hosted on MCBOSS.
- Names an enterprise-platform baseline of six: War Data Platform (WDP), Maven Smart System (MSS), GenAI.mil, Low-Code Application Development Platform (LCAP), Local Development and Data Science Environment, and Tactical Assault Kit (TAK).
- Points to enterprise datasets spanning manpower, readiness, logistics, and financial domains.
- Sets governance: policy, portfolio management, acquisition, and cybersecurity compliance.
- Requires portfolio-management coordination through the USMC AI Working Group and the applicable Functional Area Manager (FAM), with quarterly compliance assessment.
- Sets cybersecurity scope: capabilities built inside an approved platform authorization need no additional CSRMC action, and any use of PII or PHI requires a privacy impact assessment per use.

## Where it fits

Priority order. Confidence in parentheses.

| Step | Surface | Action | Confidence |
|------|---------|--------|------------|
| 1 | `content/citations/maradmin-325-26.mdx` | New citation entry, modeled on `maradmin-018-26.mdx` | 0.95 |
| 2 | `content/marines/ai-overview.mdx` | Add one line to the "MARADMIN Ecosystem" section | 0.90 |
| 3 | New leaf `content/marines/enterprise-ai-data-software-platforms.mdx` | Awareness page for the six-platform baseline, enterprise data, and FAM plus portfolio governance | 0.85 |
| 4 | `content/marines/ai-governance-and-approval.mdx` | Add FAM consultation and quarterly portfolio-management assessment. Update the enterprise-platform list in the "What Does NOT Constitute a Separate GenAI Capability" section | 0.85 |
| 5 | `content/marines/genai-mil-enterprise-platform.mdx` | Reframe GenAI.mil as one of six platforms. Cross-link the new leaf | 0.80 |

## What does NOT belong

- Deep documentation of WDP, MSS, LCAP, and TAK. TAK is tactical. Maven is intelligence and targeting. WDP is data analytics. None are S-1 admin. Documenting them operationally breaks role separation and portal scope. Name them, point to the IRM and DC I, hold the awareness lane the existing AI pages occupy.
- An IT portfolio-management or acquisition surface. MCO 5230.21 and DODI 5000.75 govern this MARADMIN. The portal has no acquisition domain. Building one is scope creep.
- A link to the IRM itself. The manual sits on MCBOSS at `app.mcboss.usmc.mil`, a CAC-gated Appian site with no public landing page, and the URL in the message is mangled. Cite the marines.mil announcement, not the IRM record. This matches the no-URL posture for gated sources.

## Blind spots

- This governs the portal's own tools, not only its content. SemperScribe and the cloud.gov apps are arguably ADS capabilities. Paragraphs 5 and 7 require coordination with the USMC AI Working Group and the applicable FAM, plus quarterly portfolio-management assessment, before developing capabilities on enterprise platforms. Tool accreditation and hosting status are unknown here, so this is a flag, not a finding of non-compliance. Worth a separate review.
- Only the announcement is in hand, not the IRM. The message announces a manual and lists platform names. The substance lives in the IRM, which is unreachable from here. Any page built now is limited to the announcement, which is thin. `lastVerified` would read 2026-07-21 against the message only, not the manual.

## Build plan

Owner decision on 2026-07-21: hold the build. Role scope decided: all four (marine, leader, commander, admin), matching the cluster.

Each step below ships independently. Stop after any step and the portal stays green.

### Step 1. Citation entry

- Create `content/citations/maradmin-325-26.mdx`.
- Fields mirror `maradmin-018-26.mdx`: id, aliases (325-26, 325/26, 325/2026, plus "ADS IRM" and "Enterprise AI Data Software"), title, type MARADMIN, number 325/26, publisher DC I, effectiveDate 2026-07-21, lastVerified 2026-07-21, roles all four.
- externalUrl: `https://www.marines.mil/News/Messages/Messages-Display/Article/4550516/announcement-of-enterprise-artificial-intelligence-data-and-software-informatio/`
- Run `npm run content:sync` to rebuild the registry and alias map.

### Step 2. Ecosystem line

- Add a 325/26 bullet to the "The MARADMIN Ecosystem" section of `ai-overview.mdx`, next to 214/26, 635/24, 270/25, 018/26, and 135/26.
- Add a reference line to the frontmatter references array.

### Step 3. Awareness leaf

- Create `content/marines/enterprise-ai-data-software-platforms.mdx`.
- Cover the six-platform baseline at awareness depth, enterprise data domains, and the FAM plus portfolio-management governance path.
- Register the leaf in `src/lib/marines-categories.ts` and rebuild role-nav through `npm run content:sync`.
- Cross-link from `ai-overview.mdx` and `genai-mil-enterprise-platform.mdx`.

### Step 4. Governance edits

- In `ai-governance-and-approval.mdx`, add FAM consultation before capability development and the quarterly portfolio-management compliance assessment.
- Update the enterprise-platform list in the "What Does NOT Constitute a Separate GenAI Capability" section.

### Step 5. GenAI.mil reframe

- In `genai-mil-enterprise-platform.mdx`, present GenAI.mil as one of six enterprise platforms and cross-link the new leaf.

## Verification for when built

- `npm run content:sync` clean, zod validation green on the new citation and leaf.
- Frontmatter complete, `lastVerified` reflects the source check against the announcement.
- No banned words, no em-dashes, no semicolons, no asterisks in user-facing copy.
- Alias map resolves "325/26", "MARADMIN 325/26", and "ADS IRM" to the new citation.
- `npm run lint` and `npm run build` clean before any push.
