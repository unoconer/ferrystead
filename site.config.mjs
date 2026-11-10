/**
 * ============================================================================
 *  FERRYSTEAD — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://ferrystead.netlify.app', // no trailing slash
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Ferrystead',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the assumed name is filed (NY Department of State, or the county clerk for a sole proprietor)
    owner: null, // optional
    foundingYear: null,

    phone: '(332) 900-3049',
    phoneE164: '+13329003049',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '355 Lexington Ave', // real, staffed office — add suite/floor if any
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10017',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['New York, NY'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  form: { name: 'consultation' },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 5796436 — aerial over the Hudson River waterfront, Manhattan (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      ferry: { src: '/assets/media/ferry.webp', pos: '50% 60%', alt: 'Staten Island Ferry crossing New York Harbor in front of Lower Manhattan' },
      bow: { src: '/assets/media/bow.webp', pos: '60% 40%', alt: 'Bow and pilothouse of a New York ferry' },
      bridge: { src: '/assets/media/bridge.webp', pos: '50% 50%', alt: 'Brooklyn Bridge and the Manhattan skyline over the East River' },
    },
  },
};
