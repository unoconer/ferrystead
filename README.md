# Ferrystead: Website

A one-page site for Ferrystead, which provides Solo and self-directed 401(k) plan support from an
office in New York City. It's static with no dependencies, built with Node and deployed
to **Netlify** at `https://ferrystead.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `ferrystead`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under New York law
plus `/thank-you/` and `404.html`.

## Office

Ferrystead is a **storefront office** (`locationType: 'office'`) at **355 Lexington Ave, New York,
NY 10017**, phone **(332) 900-3049**. The address shows in the hero card, footer and contact
section, with a map and storefront structured data. Keep it identical to the Google Business Profile.

## Design

- **Palette:** harbor night `#14181F`, steel blue `#2F5F8A`, ferry orange `#F07A2B`, sky `#A9C7E4`, harbor fog `#F7F7F5`
- **Type:** Bodoni Moda (display) and Archivo (text), both self-hosted
- **Logo:** an arched doorway framing a ferry crossing in front of a skyline (`src/brand.mjs`)
- **Hero:** background video over the Hudson River waterfront (desktop only; phones get the poster image)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
