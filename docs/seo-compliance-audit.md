# KavachQ SEO, compliance and technical audit

Audit date: 23 November 2026  
Canonical production origin: `https://kavachq.com`

## Executive summary

The original Next.js application had five public route files, one intentionally hidden pricing route returning 404, a private QA route, a browser-based repository scanner, and basic metadata/robots/sitemap support. The sitemap included only home, demo, FAQs and contact. Demo and most “Request Demo” links opened an email client. The configured Open Graph image did not exist. Several scanner capabilities appeared in marketing content but were not implemented in this public repository.

This change establishes a crawlable, evidence-led public information architecture. It adds compliance, security, solution and educational routes; keeps pricing intentionally unpublished; creates accurate metadata, canonical URLs, breadcrumbs and structured data; publishes the supplied GAINT ISO certificate documents with scope limitations; and routes every demo CTA to a Gmail-compose workflow.

## Current route and indexing status

| Route group | Status | Indexing action |
| --- | --- | --- |
| `/` | 200, canonical, indexable | Keep indexed |
| `/solutions` | 200, unique metadata | Keep indexed |
| `/solutions/*` (7 routes) | 200, static HTML, breadcrumb schema | Keep indexed; planned capabilities are clearly labelled |
| `/resources` | 200, unique metadata | Keep indexed |
| `/resources/*` (10 routes) | 200, static HTML, breadcrumb schema | Keep indexed and review when standards change |
| `/compliance` | 200, certificate evidence and primary sources | Keep indexed |
| `/security-and-verification` | 200, methodology and disclosure | Keep indexed |
| `/pricing` | 404 with noindex metadata; absent from internal navigation and sitemap | Keep unpublished until commercial approval |
| `/demo` | 200, unique content and validated form | Keep indexed |
| `/faqs` | 200, FAQPage structured data | Keep indexed while visible answers match schema |
| `/contact` | 200, unique metadata and content | Keep indexed |
| `/qa-queue` | 200 but `noindex` and blocked in robots | Keep private/unlinked; authentication is recommended if sensitive QA is added |
| `/api/*` | Dynamic endpoints, blocked in robots | Do not index |

All 26 sitemap URLs returned HTTP 200 during local production verification. `robots.txt`, both certificate PDFs and the synthetic CBOM sample also returned 200.

## Certificate and compliance findings

- The supplied certificates identify **GAINT Clout Technologies Private Limited** as the holder, not the KAVACHQ product.
- ISO/IEC 27001:2022 certificate `305026070821IS` is dated 8 July 2026 through 7 July 2029, subject to surveillance conditions printed on the document.
- ISO 9001:2015 certificate `305026071040Q` is dated 10 July 2026 through 9 July 2029, subject to surveillance conditions printed on the document.
- QRO Certification LLP provides an issuer verification form but no stable public record URL for either certificate. The website therefore says “Current per supplied certificate” and links to issuer verification rather than claiming independent verification.
- ISO management-system certification is not represented as product certification, a vulnerability guarantee, government approval or proof that KAVACHQ is “quantum-safe.”

## Product-claim review

Implemented in this repository:

- Browser-local static pattern scanning of supported local source/configuration files.
- Public GitHub repository download and browser-side analysis, subject to GitHub and configured file limits.
- Findings for defined patterns such as private-key headers, credential-like values, disabled TLS verification, dynamic execution and weak hashes.

Not implemented in this public repository and therefore labelled planned or scope-dependent:

- Binary scanner.
- Container registry or Kubernetes cluster scanner.
- Legacy document ingestion/analysis.
- Full enterprise cryptographic discovery connectors and migration orchestration.

## Competitor structure review

The public `kavachq.in` site uses extensive research, methodology, downloadable evidence and explicit limitations to build technical trust. KavachQ by GAINT should adopt the useful pattern—date evidence, publish scope, separate observation from inference, provide reproducible samples—without copying language, product names, branding or unverified claims. This implementation follows that strategy with original GAINT content, a synthetic CBOM example and explicit public-scanner limits.

## Technical SEO implemented

- Canonical URLs and unique titles/descriptions for every public route.
- Complete XML sitemap containing only canonical public pages.
- `robots.txt` sitemap reference plus exclusions for APIs and QA.
- Organization, Brand, WebSite and SoftwareApplication data at the root.
- BreadcrumbList on solution and resource detail pages.
- FAQPage only for visible FAQ content.
- Open Graph and Twitter metadata using an existing, valid image asset.
- Public content server-rendered or statically generated for crawler access.
- Internal navigation to Solutions, Resources, Compliance, Security and Demo.
- Security response headers for MIME sniffing, referrer policy, framing and device permissions.

## Demo request workflow

The demo form validates the required fields in the browser and opens a Gmail compose screen addressed to the confirmed company contact. The visitor's entered details are placed in the subject and body for review before sending. The website does not persist the form data or claim that a request was delivered before the visitor sends the Gmail message.

## Google Search Console handoff

1. Deploy the production build and verify the canonical host serves HTTPS.
2. Open the existing `kavachq.com` property in Search Console.
3. Submit `https://kavachq.com/sitemap.xml` under **Sitemaps**.
4. Use **URL inspection** on `/`, `/compliance`, `/security-and-verification`, `/solutions` and `/resources`; request indexing only after the deployed URL renders correctly.
5. Review **Pages**, **Core Web Vitals**, **HTTPS** and **Enhancements** after Google recrawls.
6. Do not repeatedly resubmit URLs or promise immediate ranking. Discovery, recrawl and indexing remain Google's decisions.

Locally verifiable: build success, static generation, status codes, canonical tags, descriptions, schema presence, sitemap contents, robots rules, certificate files and form validation. Google-only verification: crawl timing, selected canonical, indexed status, rich-result eligibility, search impressions and field Core Web Vitals.

## Remaining recommendations

- Confirm the Gmail recipient and prefilled message wording before launch.
- Keep pricing unpublished until commercial figures are confirmed by product and legal owners.
- Replace or expand the social preview with a dedicated 1200×630 brand creative when approved.
- Add a Content Security Policy after inventorying the required Google Tag Manager and application script origins.
- Run Lighthouse and screen-reader checks in the deployment environment; build output alone cannot reproduce field performance.
- Add durable authentication if `/qa-queue` will ever expose non-public information.
