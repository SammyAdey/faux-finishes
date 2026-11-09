# Homepage material direction

Approved in chat on 4 November 2026. Scope: the homepage services, principles and projects sections. Hero components, header, global colours and typography, inner-page listings, map, testimonials and footer are unchanged.

## Composition

- Services: three visible material studies in a hairline grid, linking to existing major-project, protective-coating and textured-finish capabilities. Additional capability links retain the wider offer.
- Principles: solid brand purple, cream Canela statement, static layered material samples and three numbered principles. Yellow is used for the middle sample and numbering.
- Projects: two always-visible images at different scales followed by two compact project links. Existing imagery is not verified project photography, so it is explicitly captioned as illustrative. Replace it with client-supplied project images when available.
- Mobile: service cards, samples and projects stack; all content and links remain available without hovering. Motion is limited to hover/focus details and disabled under reduced-motion preferences.

## Material asset

Final asset: `public/finishes/material-samples.webp` (2172 × 724, about 316 KiB). Created with the built-in image generation tool, then encoded as WebP without changing composition. It contains three equal material panels; CSS selects each panel. The cream sheet uses a low-opacity grayscale texture over the existing cream token. These are decorative finish studies, not product specifications or completed-work photographs.

## Verification

- Full ESLint check and TypeScript validation passed.
- Production build passed with `next build --webpack`, generating all 28 pages. The default Turbopack build was blocked by an environment restriction when starting its CSS processing worker; no build configuration was changed.
- Reviewed the new sections at 375, 768, 1024 and 1440 CSS-pixel widths. They fit their containers with no clipped text. Desktop and mobile compositions were visually inspected.
- Confirmed featured service and project links open the existing detail routes.
- Cream on purple has a 6.79:1 contrast ratio; ink on yellow has a 10.90:1 ratio. Principle numbers use ink on yellow swatches. Hover/focus transitions respect reduced-motion preferences.
- Existing issue outside this scope: the untouched hero roller extends roughly 25px beyond the viewport at 375px. No hero or global overflow styles were changed.

### Final generation prompt

> Use case: product-mockup. Asset type: website decorative material texture atlas for Faux Finishes architectural painting company. Generate a perfectly front-on flat texture atlas, landscape 3:1 composition, THREE EXACTLY EQUAL WIDTH vertical panels touching edge-to-edge, each panel square. No margins, borders, frames, gaps or text. Left third: rich brand purple #5E3BBD architectural painted plaster, subtle beautiful hand trowel surface texture and fine matte granularity. Middle third: charcoal #242424 powder coated steel surface, restrained thin vertical joint near right side and two tiny dark flush rivets, refined lightly stippled finish. Right third: brand yellow #FFB81C fine rendered stucco plaster, lovely tactile texture. Even neutral diffuse daylight across all panels, preserve saturated brand hues, no strong gradient or large shadows. All texture closeup photographic at identical scale, full bleed, square-on orthographic view, no perspective, no background. Architectural material library sample imagery, highly realistic surfaces, clean sophisticated finish. No objects, no tools, no logos, no text, no labels, no paint splashes. Intended for use as three individual square crops on a website, so each third must contain only its assigned material.
