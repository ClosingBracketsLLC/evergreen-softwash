/**
 * Single source of truth for business identity and contact details.
 * Update values here — every page, schema block, and footer reads from this file.
 */
export const site = {
  name: 'Evergreen Softwash',
  legalName: 'Evergreen Softwash LLC',
  domain: 'https://www.evergreensoftwash.com',
  tagline: 'Estate-grade exterior care',
  description:
    'Luxury soft washing, pressure washing, and concierge detailing for fine homes, vehicles, aircraft, and watercraft across greater Puget Sound.',

  // TODO(client): replace placeholder contact details before launch.
  phone: '(253) 555-0148',
  phoneHref: 'tel:+12535550148',
  email: 'hello@evergreensoftwash.com',

  address: {
    locality: 'Gig Harbor',
    region: 'WA',
    postalCode: '98335',
    country: 'US',
  },

  hours: 'Monday – Saturday, 7:00 AM – 6:00 PM',
  openingHoursSchema: 'Mo-Sa 07:00-18:00',

  serviceAreas: [
    'Gig Harbor',
    'Tacoma',
    'Mercer Island',
    'Medina',
    'Bellevue',
    'Kirkland',
    'Sammamish',
    'Bainbridge Island',
    'Fox Island',
    'University Place',
    'Lakewood',
    'Port Orchard',
  ],

  social: {
    instagram: 'https://www.instagram.com/evergreensoftwash',
    facebook: 'https://www.facebook.com/evergreensoftwash',
    youtube: 'https://www.youtube.com/@evergreensoftwash',
  },

  // TODO(client): point at a live form endpoint (Formspree, Basin, Netlify Forms…).
  formEndpoint: 'https://formspree.io/f/REPLACE_ME',
} as const;

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'Journal', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
] as const;
