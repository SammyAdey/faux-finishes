# Legacy website migration audit

Reviewed 4 November 2026. Compared all 24 pages linked from the legacy primary navigation with the current repository. Read page HTML, image references and document links; did not submit forms or verify PDF contents, image resolution, current accreditations or historical project claims independently. No website code changed during this audit.

## Main finding

The primary pages, service categories and six featured project entries are represented in the new build. The major losses are original project photography, detailed work scopes, accurate project-party metadata, specialist service details and governance downloads.

## Prioritised carry-over list

| Priority | Area | Missing or incomplete in the build | Recommended action |
|---|---|---|---|
| High | Project imagery | The six legacy project pages reference 59 distinct image URLs. The build uses one illustrative image per detail page, often unrelated stock. | Review/download originals, choose an authentic cover for each project, add a gallery or lightbox, and use the same verified covers in listings. |
| High | Project details | Legacy pages include specific painting scopes, separate clients/lead contractors and overall development values. Current entries largely compress these into a paragraph and a client string. | Add work-scope sections and separate project-owner/client and lead-contractor fields. Confirm values before displaying them; identify them as overall project values, not Faux Finishes contract amounts. |
| High | Governance | The old page is a document library, while the build contains four general commitment statements. | Restore downloadable insurance/licensing documents using current client-approved equivalents. The six legacy links have labels/filenames dated 2021–2024 and refer to Craka/Hauser entities; confirm the relevant legal entities. |
| High | Service depth | Detailed coating methods, surface types and example environments are absent from rewritten service descriptions. | Restore useful technical detail under scannable subsections, without copying old filler or making unconfirmed current claims. |
| High | Legacy service URLs | Twelve old service pages use root-level paths; the build uses `/services/[slug]` and defines no migration redirects in `next.config.ts`. | Add permanent old-to-new redirects and verify incoming links before launch. Keep existing project URLs. |
| Medium | About trust signals | Legacy About mentions work warranties, references on request, Master Painters membership, licensing and zero-VOC/high-performance coating expertise. | Confirm current warranty terms and memberships, then add a concise assurance block. Master Builders is already represented by a logo. |
| Medium | Breadth of experience | Antarctic work, office/shop fitouts, and some named major projects have become less visible. | Add the Antarctic experience to Remote Area Projects; surface office/shop fitouts and residential work clearly. Canvas Apartments and Queensland Bioscience Precinct already exist in data but are excluded by About's five-item limit. |
| Medium | Contact availability | Phone, mobile, address and social links are retained, but the old site's 24/7 availability appears only in metadata in the build. | Confirm 24/7 availability before making it visible in contact copy. |

## Project-by-project findings

| Legacy project | Image references | Detail to restore |
|---|---:|---|
| [111 Eagle Street](https://fauxfinishes.com.au/projects/111-eagle-st-brisbane/) | 5 | Low-VOC/environmental painting contribution; separate GPT Group client from Leighton Contractors. Recheck the historical superlative about building height rather than presenting it as current. |
| [RAAF Amberley](https://fauxfinishes.com.au/projects/raaf-amberley/) | 6 | The page covers two programmes: Super Hornet facilities and logistics transformation. Restore the distinct scopes and Australian Government / Leighton roles. |
| [Lady Cilento / QCH](https://fauxfinishes.com.au/projects/lady-cilento-childrens-hospital-qch/) | 9 | Legacy copy identifies painting from level 5 to the roof, Queensland Government as client and AbiGroup as lead contractor. Distinguish Faux Finishes' actual work from the wider development's facility list. |
| [Groote Eylandt](https://fauxfinishes.com.au/projects/bhp-billiton-groote-eylandt/) | 21 | Preparation, patch repair, epoxy sealing and coating stages; the project's operational constraints. Avoid repeating absolute zero-risk language. |
| [Christmas Island](https://fauxfinishes.com.au/projects/christmas-island-iprc/) | 7 | Facility types and remote delivery context. Correct current client metadata: the old page lists Australian Government as client and Baulderstone as lead contractor. |
| [Residential housing](https://fauxfinishes.com.au/projects/project-and-residential-housing/) | 11 | Restore the residential gallery and clear coverage of new builds and existing-home repainting. Legacy client/contractor/value fields are N/A and need not become visible empty fields. |

The 59 URLs are references to project-page images, not a guarantee of print quality or confirmation of each photograph's ownership. Service-page galleries often repeat a generic `650x300-1.png` placeholder; do not migrate those. An actual epoxy-floor image is referenced by the specialist coatings page.

## Service-page coverage

All twelve old service detail pages have a corresponding service in the build. The build also introduces a dedicated epoxy-floor route; the legacy menu's epoxy item points to the services index.

| Legacy page | Carry-over assessment |
|---|---|
| [Major projects](https://fauxfinishes.com.au/major-projects/) | Restore selected evidence such as Clem7, Brisbane Container Loading Terminal and Prince Charles Hospital after client confirmation. |
| [Complex environments](https://fauxfinishes.com.au/complex-environments/) | Restore the range of industrial, utilities, marine and aviation contexts. |
| [Remote area projects](https://fauxfinishes.com.au/remote-area-projects/) | Add Australian Antarctic research-station experience. |
| [Maintenance/remedial](https://fauxfinishes.com.au/maintenance-and-remedial-works/) | Core inspection, repair and renewal offer is substantially retained. |
| [Rendering](https://fauxfinishes.com.au/rendering/) | Core offer retained; placeholder gallery adds no value. |
| [Specialist coatings](https://fauxfinishes.com.au/specialised-coatings-and-finishes/) | Restore fire-protective/intumescent systems, polysiloxane steel coatings and tank-farm applications; epoxy already has its own new page. |
| [Textured finishes](https://fauxfinishes.com.au/textured-finishes/) | Restore render families, acrylic textures, decorative finishes, wall coverings and lacquer applications. |
| [Sign writing/line marking](https://fauxfinishes.com.au/sign-writing-and-line-marking/) | Core offer retained. |
| [Graffiti removal](https://fauxfinishes.com.au/graffiti-removal/) | Core removal/anti-graffiti offer retained. |
| [Colour consultancy](https://fauxfinishes.com.au/colour-consultancy/) | Old text is filler; confirm the rewritten new description with the client. |
| [Lead paint removal](https://fauxfinishes.com.au/lead-paint-removal/) | Old text is filler; confirm the rewritten new description with the client. |
| [Waterproofing](https://fauxfinishes.com.au/waterproofing/) | Old text is filler; confirm the rewritten new description with the client. |

## Other pages and launch gaps

- [Home](https://fauxfinishes.com.au/): founding date and core offer retained. The unused `capabilityList` includes office/shop fitting; it is not rendered. The hero stays outside this audit's proposed implementation scope.
- [About](https://fauxfinishes.com.au/about/): retain useful assurance and technical-experience details after current confirmation. No team photograph was present in the reviewed main page content.
- [Projects index](https://fauxfinishes.com.au/projects/): all six entries retained. Actual project galleries are the missing layer.
- [Services index](https://fauxfinishes.com.au/services/): category coverage retained; depth needs restoration in detail routes.
- [Governance](https://fauxfinishes.com.au/policies-governance/): restore the document-library purpose. Existing new governance statements do not constitute a privacy policy.
- [Contact](https://fauxfinishes.com.au/contact/): essential contact details and basic form fields retained. The new form currently prevents submission and displays a disconnected-delivery message; connect enquiry delivery before launch. The old form's delivery was not tested.
- Separate current-build issue: four dummy testimonials remain in `src/lib/upgrade-content.ts`. Replace them with approved quotes or remove them before launch. Do not infer real quotes from the old website.
- Optional: the old header has search and service/project submenus. Those can improve discovery, but are lower priority than restoring real content and reliable enquiries.

## Inventory

`docs/legacy-asset-inventory.json` records the 24 reviewed URLs, image references and six governance PDF links. It excludes copied page-body text. No legacy PDFs or project photographs were installed into the website during this review.

Recommended sequence: authentic project images and galleries → project scopes/metadata → current governance documents → specialist service detail and About assurances → redirects and enquiry delivery → remove preview content.
