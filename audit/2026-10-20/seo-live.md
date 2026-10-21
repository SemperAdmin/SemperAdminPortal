# Live SEO and link integrity audit

Target: https://semperadmin.github.io/SemperAdminPortal/ . Audited 2026-10-20 (read-only). Scratch: C:\Users\barbc\AppData\Local\Temp\claude\audit-scratch\seo\

## Executive summary

| Tier | Score | Note |
|---|---|---|
| Crawlability | B | robots.txt and sitemap valid, 1,987 URLs, base path correct. Utility pages and one broken route sit in the sitemap. |
| Technical | C | No canonical tags anywhere, og:url wrong on every page, no structured data, OG image served as octet-stream. |
| On-page | C | Titles unique and well formed. Descriptions range from 43 to 405 chars. Every page shares one og:title and one og:image. |
| Content | C | 117 placeholder "Review and rewrite this summary" strings render on /links/. 506 video pages carry stub descriptions. |
| Links | B- | 3 confirmed dead, 9 NAVMC form links land on a generic DLA page, 396 of 552 checked URLs are bot-blocked and unverifiable from here. |

Counts: 1,987 sitemap URLs, 16 pages sampled, 6 further fetches for 404 behaviour, 552 unique external URLs checked (478 citation externalUrl values plus 100 sampled from links and role pages, deduplicated).

## Findings

### SEO-01 No canonical link on any page (major)
- Issue: No `<link rel="canonical">` on any sampled page.
- Impact: Duplicate-signal risk (trailing-slash 301s, query variants such as `/search/?q=`), weaker consolidation across 1,987 pages.
- Evidence: `curl -s .../marines/advance-and-emergency-pay/ | grep -c -i canonical` returned `0`. All 15 sampled pages show canon=null in the analyzer (an.py).
- Fix: Add `alternates: { canonical: "./" }` in layout metadata (metadataBase is already the origin) or per-route generateMetadata. Verify the rendered href includes /SemperAdminPortal.

### SEO-02 og:url is the home page on every page (major)
- Issue: layout.tsx hardcodes `openGraph.url` to the home URL and every page inherits it.
- Impact: Shares of any deep page tell Facebook, LinkedIn and Slack to consolidate onto the home URL.
- Evidence: `curl -s .../marines/advance-and-emergency-pay/ | grep -o '<meta[^>]*og:url[^>]*>'` returned `og:url content="https://semperadmin.github.io/SemperAdminPortal/"`. src/app/layout.tsx lines 57-62 set `url`.
- Fix: Remove the static `url`. Set per page alongside the canonical in SEO-01.

### SEO-03 og:title, og:description and og:image identical across all pages (major)
- Issue: Pages define `title` but the openGraph and twitter blocks come from the layout.
- Impact: Every shared link previews as "Semper Admin Portal". Policy pages lose share value.
- Evidence: all 15 sampled pages: `ogt: "Semper Admin Portal"`, `ogi: .../opengraph-image?398c73fd877c6565`. The PAA page title is `Advance, Local, Partial, and Emergency Pay - Marines | Semper Admin Portal`.
- Fix: Emit per-page openGraph title and description from the same frontmatter that drives title and summary.

### SEO-04 No JSON-LD structured data (minor)
- Evidence: `grep -c 'application/ld+json'` returned `0` on the sample page, jsonld=[] on all 15.
- Impact: No WebSite, Organization, BreadcrumbList or Article markup.
- Fix: Add WebSite and BreadcrumbList site-wide, Article with dateModified from lastVerified on content pages.

### SEO-05 Sitemap lists a broken route and utility routes (major for the 404, minor for the rest)
- Issue: `/opengraph-image/` is in the sitemap and returns 404. `/search/`, `/recent/`, `/styleguide/` are listed and carry `index, follow`.
- Evidence: `curl -o /dev/null -w "%{http_code}" .../opengraph-image/` returned `404`, while `.../opengraph-image` returned `200 application/octet-stream`. Sitemap contains `<loc>.../opengraph-image/</loc>`, `/recent/`, `/search/`, `/styleguide/`. `/recent/` and `/styleguide/` both serve `<meta name="robots" content="index, follow"/>`.
- Impact: Wasted crawl budget, a 404 in the sitemap raises a Search Console error, low-value pages are indexable.
- Fix: Add `exclude` entries in the next-sitemap config for `/opengraph-image*`, `/search*`, `/recent*`, `/styleguide*`. Set noindex on those three pages.

### SEO-06 All lastmod values are the build timestamp (minor)
- Evidence: python over sitemap-0.xml: 1987 `lastmod` tags, `distinct lastmod 5`, all `2026-10-21T01:26:02.8xxZ`. Priority all `0.7`, changefreq all `daily`.
- Impact: Google discounts lastmod it finds unreliable, so real changes earn no freshness credit.
- Fix: Emit lastmod from each page lastVerified. Drop priority and changefreq (ignored).

### SEO-07 /links/ ships 117 placeholder summaries (major, content)
- Evidence: `curl -s .../links/ | grep -o "Review and rewrite this summary" | wc -l` returned `117`. Repo: 117 of 138 content/links/*.mdx files match, e.g. content/links/almars.mdx `summary: "Source label: ALMARS. Review and rewrite this summary, then move the file into content/links/."`.
- Impact: Scaffolding text is public on a 574 KB page. It reads as unfinished and pollutes snippets and Pagefind.
- Fix: Rewrite the 117 summaries or hide placeholder entries until rewritten.

### SEO-08 Meta description length inconsistent and thin on generated pages (minor)
- Evidence: advance-and-emergency-pay 405 chars, core-vs-core-plus 289, choosing-the-award 236. Short: video page 43 chars `Training on Admin Dashboard (Occasions tab)`, inspection page 60 chars `All O-5 and O-6 Level Commands. 11 items across the program.`
- Impact: Truncated snippets on long ones, no keyword value on 506 video and 45 inspection pages.
- Fix: Enforce 70 to 160 chars at sync time. Generate video and inspection descriptions with topic and authority.

### SEO-09 Citation page title runs to 137 characters (minor)
- Evidence: `/citations/cjcsm-3150-01b/` title is `CJCSM 3150.01B - Not an Active Publication, See CJCSM 3150.03 Series for Current Joint Reporting Structure Guidance | Semper Admin Portal` (137 chars).
- Fix: Cap titles near 60 chars before the suffix. Move the supersession note into the description.

### SEO-10 OG image served as application/octet-stream (minor)
- Evidence: `curl -w "%{content_type}" ".../opengraph-image?398c73fd877c6565"` returned `200 application/octet-stream 57710`. GitHub Pages cannot infer a type with no extension.
- Impact: Some scrapers reject images lacking an image/* type.
- Fix: Ship a static `.png` OG image from public/ and reference it by explicit URL.

### SEO-11 404 handling correct, 404 title generic (nit)
- Evidence: Made-up paths `/no-such-page/`, `/marines/made-up-slug-xyz/`, `/zzz/deep/path` each returned `404 text/html 64955 bytes` with `<meta name="robots" content="noindex">` and title `Semper Admin Portal`. Three random sitemap URLs (`/videos/core-and-assigned-missions-c-level-and-a-level/`, `/citations/paa-01-21/`, `/videos/basic-allowance-for-subsistence-bas-commander-s-discretionary-authority/`) all returned `200`.
- Fix: Title "Page not found | Semper Admin Portal".

### SEO-12 /tools has no per-tool pages (nit)
- Evidence: sitemap holds one `/tools/` URL. Tool links on the page resolve to `/SemperAdminPortal/tools/`. No tool detail route exists to sample.
- Impact: Each calculator has no indexable landing page for its own query.

### SEO-13 Passed checks (informational)
- robots.txt allows all and names the sitemap with the full base path: `Sitemap: https://semperadmin.github.io/SemperAdminPortal/sitemap.xml`. The `Host:` line is non-standard and ignored by Google.
- 1,987 URLs, 0 duplicates, 0 missing trailing slash, 0 URLs outside /SemperAdminPortal. sitemap-0.xml is 410 KB.
- All 15 sampled pages: 200, `lang="en"`, exactly one h1, `index, follow`, twitter card `summary_large_image`, zero root-relative `href` or `src` missing the /SemperAdminPortal prefix, titles unique.
- Sitemap composition: citations 560, videos 506, admin 456, marines 240, leader 104, commander 62, inspections 45, legal 4.

### SEO-14 Dead, generic-landing and malformed outbound links (major)
- Evidence: python requests HEAD then GET (chk.py, results2.json). See table below.
- Dead: `omb-m-19-21` whitehouse.gov 404. `jaginst-5800-7g` jag.navy.mil/about/policies/ 404. `secnav-m-1650-1` points at a personal fork `furby203824.github.io/SemperAdminPortal/docs/SECNAV-M-1650.1.pdf` (404), which is also a non-authoritative host for a parent-policy URL.
- Generic landing: 9 NAVMC form citations at forms.documentservices.dla.mil. `curl -L .../nfol/NONSN00001279.PDF` ends at `https://dso.dla.mil/DSF/SmartStore.aspx#!/CategoryHome/244`. `marines.dev/navalletter/` redirects to `dondocs.usmc.dev/`.
- Malformed: `links/command-profile.mdx` URL `https://www2.manpower.usmc.mil/ncp/notify%2c%20%27_blank%27%29` carries pasted JavaScript fragments.
- Moved: `skillbridge.osd.mil/organizations.htm` redirects to `www.skillbridge.mil/organizations.htm`.
- Fix: Repair or remove the 3 dead links. Point the DLA forms at a stable landing page per CLAUDE.md 4.5. Fix command-profile.

### SEO-15 Most outbound links cannot be verified automatically (minor)
- Evidence: `curl -A "Mozilla/5.0 Chrome/130" https://www.marines.mil/News/Messages/` returned `403 <TITLE>Access Denied</TITLE> ... Reference #18.dad07868...` (Akamai). 303 marines.mil URLs returned 403. 67 usmc.sharepoint-mil.us URLs redirect to login.microsoftonline.us (expected, CAC gated).
- Impact: Real rot hides behind the blocks. A CI link check will always report them.
- Fix: Verify marines.mil through a browser-tab fetch on a schedule. Keep an allowlist of gated hosts.

## Sampled pages table

| Path | Status | Title chars | Desc chars | Canonical | og:title page-specific | JSON-LD | h1 | Bytes |
|---|---|---|---|---|---|---|---|---|
| / | 200 | 19 | 117 | none | n/a | none | 1 | 112,864 |
| /marines/ | 200 | 29 | 123 | none | no | none | 1 | 174,013 |
| /marines/advance-and-emergency-pay/ | 200 | 74 | 405 | none | no | none | 1 | 136,342 |
| /leader/ | 200 | 28 | 176 | none | no | none | 1 | 144,362 |
| /leader/awards/choosing-the-award/ | 200 | 46 | 236 | none | no | none | 1 | 139,236 |
| /commander/ | 200 | 31 | 169 | none | no | none | 1 | 196,721 |
| /commander/audit-posture/core-vs-core-plus/ | 200 | 53 | 289 | none | no | none | 1 | 115,891 |
| /admin/ | 200 | 27 | 85 | none | no | none | 1 | 83,912 |
| /admin/s1-g1/legal-administration/prepare-upb/ | 200 | 56 | 160 | none | no | none | 1 | 130,194 |
| /tools/ | 200 | 27 | 103 | none | no | none | 1 | 123,596 |
| /citations/cjcsm-3150-01b/ | 200 | 137 | 94 | none | no | none | 1 | 96,424 |
| /inspections/igmc/1050/leave-liberty-and-administrative-absence/ | 200 | 70 | 60 | none | no | none | 1 | 265,019 |
| /updates/ | 200 | 34 | 104 | none | no | none | 1 | 391,350 |
| /videos/admin-dashboard-occasions-tab/ | 200 | 53 | 43 | none | no | none | 1 | 83,584 |
| /links/ | 200 | 27 | 70 | none | no | none | 1 | 573,805 |
| /search/ | 200 | 28 | 97 | none | no | none | 1 | 67,620 |

All: `lang="en"`, `robots index, follow`, generic og:image present, twitter:card summary_large_image, zero unprefixed internal hrefs.

## Dead or redirected external links table

Totals across 552 unique URLs: blocked-likely-bot 396 (303 on marines.mil, 49 on esd.whs.mil, rest other .mil and MCCS), auth-gated SSO redirect 67, ok 38, redirect-ok 19 (plus trivial scheme or www redirects), TLS chain unverifiable in python 20 (11 resolve via curl, 9 DLA ones land on the generic page), timeout 5, dead 4xx 3, 5xx 3, redirect to other landing 1.
Rows below omit bot-blocked and SSO-gated entries.

| Citation id or source file | URL | Status | Class | Final URL |
|---|---|---|---|---|
| links/amps.mdx (sample) | https://amps1.dla.mil/ampssplashscreen/%3bSplashScreen=-vfSfnZyEs08Uk69GQ8P9uSEAsGJZE9WifDK5ObP | 200 | redirect (host/path moved) | https://amps1.dla.mil/splash.html |
| links/autosaar.mdx (sample) | https://autosaar.usmc.mil/ | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| marines/childcare-provider-travel.mdx (sample) | https://dtsproweb.defensetravel.osd.mil/ | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| links/electronic-health-assessment.mdx (sample) | https://eha.health.mil/EHA/ | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-10132 (citation) | https://forms.documentservices.dla.mil/nfol/NONSN00001279.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-10274 (citation) | https://forms.documentservices.dla.mil/nfol/NONSN00003666.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-11432 (citation) | https://forms.documentservices.dla.mil/nfol/NONSN00005247.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-11800 (citation) | https://forms.documentservices.dla.mil/nfol/NONSN00008728.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-11537 (citation) | https://forms.documentservices.dla.mil/nfol/NONSN00009480.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-11533 (citation) | https://forms.documentservices.dla.mil/nfol/NONSN00010040.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-321m (citation) | https://forms.documentservices.dla.mil/nfol/NONSN00015675.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-11512 (citation) | https://forms.documentservices.dla.mil/nfol/NONSN21012602.PDF | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| navmc-11116 (citation) | https://forms.documentservices.dla.mil/order | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| secnav-m-1650-1 (citation) | https://furby203824.github.io/SemperAdminPortal/docs/SECNAV-M-1650.1.pdf | 404 | DEAD (4xx) | - |
| links/game-changer.mdx (sample) | https://gamechanger.advana.data.mil/ | timeout | timeout |  |
| marines/camogpt-and-approved-ai-tools.mdx (sample) | https://genai.mil | 503 | 5xx | https://genai.mil/ |
| marines/ai-and-data-management-training.mdx (sample) | https://genai.mil/events | 503 | 5xx | - |
| links/col-training.mdx (sample) | https://intelshare.intelink.gov/my.policy | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| links/automated-message-handling-system-amhs-lejeune.mdx (sample) | https://lejeune.amhs.usmc.mil/ | timeout | timeout |  |
| links/naval-letter-format-generator.mdx (sample) | https://marines.dev/navalletter/ | 200 | redirect to other landing | https://dondocs.usmc.dev/ |
| links/medical-readiness-reporting-system-mrrs.mdx (sample) | https://mrrs.dc3n.navy.mil/mrrs/secure/welcome.m | timeout | timeout |  |
| links/niprgpt.mdx (sample) | https://niprgpt.mil/ | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| marines/ai-and-data-management-training.mdx (sample) | https://portal.marinenet.usmc.mil/content/mnet-portal/en/civilian-coi/information-development-i | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| links/skillbridge-programs.mdx (sample) | https://skillbridge.osd.mil/organizations.htm | 200 | redirect (host/path moved) | https://www.skillbridge.mil/organizations.htm |
| usc-37 (citation) | https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title37-front&num=0&edition=prelim | 500 | 5xx | - |
| links/marine-corps-credentialing-opportunities-on-line-cool.mdx (sample) | https://www.cool.osd.mil/usmc/index.html | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| jaginst-5800-7g (citation) | https://www.jag.navy.mil/about/policies/ | 404 | DEAD (4xx) | - |
| marines/marinenet-and-distance-learning.mdx (sample) | https://www.marinenet.usmc.mil/ | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| links/marinenet-mvs.mdx (sample) | https://www.marinenet.usmc.mil/MVS/Channel/Home.aspx?Id=1369 | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| maradmin-270-25 (citation) | https://www.marines.mil/News/Messages/Messages-Display/Article/4212808/available-artificial-int | timeout | timeout | - |
| maradmin-369-25 (citation) | https://www.marines.mil/News/Messages/Messages-Display/Article/4271216/update-to-eligibility-fo | timeout | timeout | - |
| omb-m-19-21 (citation) | https://www.whitehouse.gov/wp-content/uploads/2019/06/M-19-21.pdf | 404 | DEAD (4xx) | - |
| marines/fitrep-reporting-cycle.mdx (sample) | https://www2.manpower.usmc.mil/boardEligibilityRucMcc.action | SSLError:HTT | TLS chain untrusted (unverifiable) |  |
| links/command-profile.mdx (sample) | https://www2.manpower.usmc.mil/ncp/notify%2c%20%27_blank%27%29 | SSLError:HTT | TLS chain untrusted (unverifiable) |  |

## Out of scope

- Core Web Vitals and field performance: use PageSpeed Insights or CrUX.
- Search Console coverage, indexation and queries: needs Google Search Console and Bing Webmaster Tools.
- Backlinks and domain authority: Ahrefs, Semrush or Bing Webmaster Tools.
- Indexation proxy: WebSearch `site:semperadmin.github.io SemperAdminPortal` returned only unrelated vendor "admin portal" pages and no semperadmin.github.io result. The tool does not appear to honor `site:`, so this is inconclusive. Confirm in Search Console.
- Rendered-DOM checks (JS-injected tags) and Lighthouse: not run, raw HTML only.
- Marines.mil, SharePoint and DoD-gated links need a browser session or CAC to verify.
- Duplicate-title scan across all 1,987 pages: only the sample was checked (no duplicates in sample).

## Method

- `curl -sS -m 10 -A "<Chrome UA>"` for robots.txt, sitemap.xml, sitemap-0.xml, 16 pages and 6 further fetches. Python regex analyzer an.py parsed title, meta, canonical, og, twitter, JSON-LD, h1 count and root-relative hrefs (MSYS_NO_PATHCONV=1 needed in Git Bash).
- Random sitemap sample seeded 20261020.
- Outbound: externalUrl parsed from 478 of 559 content/citations/*.mdx (_stubs skipped). 100 more URLs sampled (seed 20261020) from 294 unique non-citation URLs in content/links and content/{marines,leader,commander,admin}. Python requests, HEAD then GET fallback on status 400 or above, 10 s timeout, 5 workers, 0.4 s per-host spacing, redirects followed. Classification: 403 on .mil, MCCS, SSA and similar hosts is blocked-likely-bot. Redirects to login.microsoftonline.us are auth-gated. SSL errors retried with curl.
- No repo files edited apart from this report.
