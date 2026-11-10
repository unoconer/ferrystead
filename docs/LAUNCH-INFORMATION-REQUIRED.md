# Information Required Before Launch

Run `node build.mjs` to see what's still missing. Nothing on the site has been invented.

## Already set

- [x] Name: **Ferrystead**
- [x] Site URL: `https://ferrystead.netlify.app`
- [x] Hours: **Monday–Friday, 9:00 AM – 5:00 PM (Eastern Time)**, office meetings by appointment
- [x] Business type: **storefront office** in New York, NY (Google Business Profile "Local store")
- [x] Services confirmed: plan setup, records and valuations, Form 5500-EZ preparation, ongoing
      support, Self-Directed and Solo 401(k) education, and office meetings
- [x] Role: administrative support alongside the client's plan provider, at the sponsor's
      direction. The business is not a fiduciary, trustee, custodian, registered investment
      adviser or broker-dealer.
- [x] Format: a one-page site, with separate Privacy, Terms and Disclosures pages

## Required

| Item | Notes |
|---|---|
| **Business phone** | `business.phone` and `business.phoneE164`. Currently a visible placeholder. |
| **Office street address** | `business.address.streetAddress`, including suite or floor. Must be a real office staffed during the posted hours; no virtual office or mailbox. Currently a visible placeholder. |
| **ZIP code** | `business.address.postalCode`. Currently a visible placeholder. If the office isn't in Manhattan, also change `addressLocality` to the borough name Google uses (e.g. "Brooklyn"). |
| **Register the business name** | New York assumed name: Certificate of Assumed Name with the NY Department of State (corporation or LLC), or a Business Certificate with the county clerk (sole proprietor). Then set `business.publicNameConfirmed: true`. Check the NY business entity search, the USPTO and Google Maps for "Ferrystead" conflicts first. |

Optional: `business.geo` with the office's real coordinates.

## Recommended before going public

- [ ] An attorney has reviewed the Privacy Policy, Terms and Disclosures (New York law, administrative-services wording).
- [ ] An ERISA attorney has confirmed the administrative-services role.
- [ ] Netlify: form detection is on, an email notification is set up, and a test submission was received.
- [ ] Netlify: the project is public. Then add the Search Console verification code to `site.googleSiteVerification`.

## Optional (hidden until set)

Business email, owner name, company history and credentials.
