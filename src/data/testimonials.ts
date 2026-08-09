export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'They treated our cedar roof like it was their own. Two years on, not a trace of moss — and the crew covered every rhododendron before a drop of water moved.',
    name: 'The Hallorans',
    detail: 'Estate soft wash · Bainbridge Island',
  },
  {
    quote:
      'Our flight department has used the same detail shop for a decade. After one brightwork polish, we moved both aircraft to Evergreen. The checklist discipline sold us.',
    name: 'R. Whitfield',
    detail: 'Aircraft detailing · Tacoma Narrows',
  },
  {
    quote:
      'The hull was chalked so badly we were quoted for a repaint. Evergreen brought the gelcoat back in two days and ceramic-coated it. It still beads like new.',
    name: 'M. & C. Okafor',
    detail: 'Oxidation removal · Gig Harbor Marina',
  },
];
