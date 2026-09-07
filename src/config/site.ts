/**
 * Single source of truth for business identity and contact details.
 * Update values here — every page, schema block, and footer reads from this file.
 */
export const site = {
  name: 'Evergreen Softwash',
  legalName: 'Evergreen Softwash LLC',
  domain: 'https://evergreensoftwash.com',
  tagline: 'Estate-grade exterior care',
  description:
    'Luxury soft washing, pressure washing, and concierge detailing for fine homes, vehicles, aircraft, and watercraft across greater Puget Sound.',

  phone: '(509) 272-2633',
  phoneHref: 'tel:+15092722633',
  /** General/public address — used in schema, the footer, and anywhere unspecific. */
  email: 'info@evergreensoftwash.com',
  /** Departmental mailboxes for specific contexts. */
  emails: {
    support: 'support@evergreensoftwash.com',
    admin: 'admin@evergreensoftwash.com',
    sales: 'sales@evergreensoftwash.com',
    info: 'info@evergreensoftwash.com',
    billing: 'billing@evergreensoftwash.com',
  },

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

  // Quote form relays through Web3Forms (https://web3forms.com — no account, key arrives by email).
  formEndpoint: 'https://api.web3forms.com/submit',
  web3formsKey: '2f5caffb-c23b-4d16-91e2-4d31250e7310',
} as const;

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'Journal', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
] as const;
