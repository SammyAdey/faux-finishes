# Website upgrade sources and content

The upgrade follows `design-system/faux-finishes/MASTER.md` and page overrides. The PDF supplies the requested additions; the site's typography, borders, spacing and page components remain the design source of truth.

## Assets

- CM3, Lendlease and WATPAC: cropped from the reference images embedded in Website_Upgrade.pdf. Other logos in those screenshots were not requested and were not imported.
- Dulux and Master Builders Queensland: existing Faux Finishes website, https://fauxfinishes.com.au/ (2019/05 uploads).
- QBCC and WorkCover: public logo images at https://bakersco.com.au/ (2021/09 uploads).
- Andbuild: https://andbuild.com.au/.
- Formula Interiors: https://www.formulainteriors.com.au/.
- UNITA: official header SVG from https://unita.com.au/.
- CPB Contractors: https://www.cpbcon.com.au/, official Sitecore CDN image.
- John Holland: header SVG from https://johnholland.com.au/, presented in ink for legibility on the light surface.
- Belnic: official logo from https://belnic.com.au/ (Wix image CDN).
- Herron Coorey: official logo from its website, hosted at https://hcbc.com.au/wp-content/uploads/2023/03/logo-1.svg.
- ICM Construction: https://icmco.com.au/wp-content/uploads/2025/07/ICM_Hero_Teal_Logo.svg.
- Map outline: Natural Earth 1:110m public domain country geometry, https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson. Christmas Island is a schematic inset. Locations are regional, not exact jobsite coordinates.
- Purple #9c3c96 and yellow #ffff00 sampled from the existing Faux Finishes logo. These illustration colours do not replace the site palette.

## Content

Timeline uses the existing repository's founding date and project information. Undated chapters avoid inventing milestone dates. The live LinkedIn profile has a conflicting founding year, so the site's existing 1992 date is retained pending confirmation.

Customer review: a short excerpt by Guy Clothier, originally on Google and reproduced on https://reviews.birdeye.com/faux-finishes-166911190197000. The source is linked in the UI. No company or business role is invented for the reviewer. This is one customer review, not the requested collection of project manager/business owner testimonials.

No genuine company team photo was found in the PDF, repository, existing About page, or focused public searches. The existing About photograph is architecture. `teamPhoto` in `src/lib/upgrade-content.ts` remains null; setting it to a local source and descriptive alt text renders the prepared photo area above the timeline.

Content and asset paths can be maintained in `src/lib/upgrade-content.ts`.
