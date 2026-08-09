/**
 * Service catalog — drives the services index, each /services/[slug]/ page,
 * landing-page cards, footer links, and Service JSON-LD. One entry per service.
 */

export interface PricingTier {
  name: string;
  price: string;
  unit?: string;
  summary: string;
  includes: string[];
  featured?: boolean;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  eyebrow: string;
  /** One-line pitch used on cards and meta descriptions. */
  short: string;
  /** Longer intro paragraphs for the service page. */
  intro: string[];
  features: { title: string; detail: string }[];
  process: { title: string; detail: string }[];
  pricing: PricingTier[];
  pricingNote: string;
  faqs: ServiceFaq[];
  /** Key into src/data/images.ts */
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: 'soft-washing',
    name: 'Soft Washing',
    eyebrow: 'The signature service',
    short:
      'Low-pressure, chemistry-first cleaning that removes algae, moss, and organic staining from siding and roofs without the damage of high pressure.',
    intro: [
      'High pressure has no place on painted siding, cedar shake, or a composite roof. Soft washing works the opposite way: a precisely blended, biodegradable solution is applied at little more than garden-hose pressure, dissolving the algae, mold, and lichen that high pressure merely shaves off at the surface.',
      'The result lasts four to six times longer than pressure washing alone, because the organisms are eliminated at the root rather than trimmed back. It is the method every major siding and roofing manufacturer recommends — and the standard we built this company on.',
    ],
    features: [
      {
        title: 'Roof-safe by design',
        detail:
          'No walked shingles, no stripped granules. Applications are made from ladders, lifts, and eaves whenever possible.',
      },
      {
        title: 'Plant & pet protection',
        detail:
          'Landscaping is pre-soaked, covered, and rinsed throughout — a dedicated crew member manages nothing else.',
      },
      {
        title: 'Longer-lasting clean',
        detail:
          'Treating growth at the root keeps surfaces clean 4–6× longer than pressure washing alone.',
      },
    ],
    process: [
      { title: 'Inspection & quote', detail: 'We document surfaces, growth, and fragile areas, then confirm a fixed price before work begins.' },
      { title: 'Protect & pre-soak', detail: 'Landscaping, fixtures, and finishes are shielded; surrounding plantings are saturated with fresh water.' },
      { title: 'Low-pressure application', detail: 'Our blended solution is applied at soft-wash pressure and allowed to work — no blasting, ever.' },
      { title: 'Rinse & walkthrough', detail: 'Every surface is rinsed clean and inspected with you before we leave the property.' },
    ],
    pricing: [
      {
        name: 'House Wash',
        price: 'from $595',
        summary: 'Complete envelope refresh for siding of every material.',
        includes: ['All siding, soffits & gutters exteriors', 'Window rinse & spot-free finish', 'Landscape protection throughout', '2-year algae-free promise'],
      },
      {
        name: 'Roof Soft Wash',
        price: 'from $895',
        summary: 'Moss and algae elimination for composite, tile, cedar, and metal roofs.',
        includes: ['Manufacturer-approved chemistry', 'Moss treatment & removal', 'Gutter face brightening', '5-year roof treatment warranty'],
        featured: true,
      },
      {
        name: 'Full Estate Envelope',
        price: 'from $1,450',
        summary: 'House and roof together, sequenced in a single visit.',
        includes: ['Everything in House Wash & Roof Soft Wash', 'Fences, gates & outbuildings quoted on site', 'Priority scheduling', 'Season-end courtesy inspection'],
      },
    ],
    pricingNote:
      'Final pricing depends on square footage, stories, and growth severity. Every project is confirmed with a fixed written quote before work begins.',
    faqs: [
      {
        question: 'Is soft washing safe for my landscaping?',
        answer:
          'Yes. We pre-soak all plantings, cover delicate beds, and rinse continuously during application. Our solutions are biodegradable and neutralized before they reach the soil.',
      },
      {
        question: 'How long does a soft wash last?',
        answer:
          'Because soft washing kills growth at the root instead of shearing it off, most homes stay clean for 4–6 years on roofs and 2–3 years on siding — several times longer than pressure washing.',
      },
      {
        question: 'Will you walk on my roof?',
        answer:
          'Almost never. We apply from eaves, ladders, and lifts to protect shingles and tiles. If roof access is unavoidable, we use soft-soled equipment and document the condition before and after.',
      },
    ],
    image: 'softWash',
    imageAlt:
      'Technician in a deep green uniform soft washing white board-and-batten siding with a long low-pressure wand',
    seoTitle: 'Soft Washing for Homes & Roofs',
    seoDescription:
      'Manufacturer-approved low-pressure soft washing for siding and roofs in greater Puget Sound. Kills algae and moss at the root — house washes from $595.',
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    eyebrow: 'Hardscapes, restored',
    short:
      'Professional-grade surface cleaning for driveways, patios, walkways, and pool decks, finished with an even, streak-free result.',
    intro: [
      'Concrete, pavers, and natural stone can take real pressure — but an even, professional result takes more than a rented machine. We pair commercial surface cleaners with controlled water flow and post-treatment, so hardscapes come out uniformly bright instead of zebra-striped.',
      'From a moss-darkened paver courtyard to a tannin-stained pool deck, we restore the surfaces your landscape architecture was designed around.',
    ],
    features: [
      {
        title: 'Surface-matched pressure',
        detail: 'Flow and PSI are tuned per material — aggregate, stamped concrete, flagstone, and brick each get their own approach.',
      },
      {
        title: 'No zebra striping',
        detail: 'Rotary surface cleaners and overlapping passes leave one even finish, not wand marks.',
      },
      {
        title: 'Post-treatment included',
        detail: 'A finishing treatment slows regrowth in joints and shaded corners, keeping surfaces brighter longer.',
      },
    ],
    process: [
      { title: 'Surface assessment', detail: 'We identify material, staining type, and joint condition to set the right pressure and chemistry.' },
      { title: 'Pre-treat', detail: 'Oil, rust, tannin, and organic stains get targeted pre-treatment before any water moves.' },
      { title: 'Machine surface clean', detail: 'Commercial rotary cleaners deliver even coverage at the correct PSI for the material.' },
      { title: 'Rinse & post-treat', detail: 'Surfaces and joints are rinsed, then treated to slow regrowth through the wet season.' },
    ],
    pricing: [
      {
        name: 'Driveways & Walkways',
        price: 'from $395',
        summary: 'Even, edge-to-edge restoration for concrete and pavers.',
        includes: ['Commercial surface cleaner finish', 'Targeted stain pre-treatment', 'Joint & edge detail passes', 'Regrowth post-treatment'],
      },
      {
        name: 'Patios & Pool Decks',
        price: 'from $445',
        summary: 'Careful cleaning around coping, furniture, and planted borders.',
        includes: ['Material-matched PSI & chemistry', 'Furniture moved & replaced', 'Pool-safe rinse management', 'Regrowth post-treatment'],
        featured: true,
      },
      {
        name: 'Full Hardscape',
        price: 'from $795',
        summary: 'Driveway, walks, patio, and steps sequenced in one visit.',
        includes: ['All hard surfaces on the property', 'Optional paver re-sanding quote', 'Priority scheduling', 'Season-end courtesy inspection'],
      },
    ],
    pricingNote:
      'Pricing reflects square footage and staining severity. Sealing and paver re-sanding are quoted separately after cleaning.',
    faqs: [
      {
        question: 'Pressure washing or soft washing — which do I need?',
        answer:
          'Hard mineral surfaces underfoot — concrete, pavers, stone — are pressure washed. Everything vertical or delicate — siding, roofs, fences, screens — is soft washed. Most estates need both, and we quote them together.',
      },
      {
        question: 'Can you remove oil and rust stains?',
        answer:
          'Usually, yes. Oil, rust, and tannin each require different chemistry, which is why we pre-treat before washing. Deep-set stains may lighten rather than vanish; we set expectations honestly during the quote.',
      },
      {
        question: 'Will pressure washing damage my pavers?',
        answer:
          'Not at the pressures we use. Rotary surface cleaners spread force evenly, and we keep PSI matched to the material. We also offer joint re-sanding after cleaning to restore paver stability.',
      },
    ],
    image: 'pressureWash',
    imageAlt:
      'A stone paver driveway half-cleaned with a crisp line between the dark weathered half and the bright restored half',
    seoTitle: 'Pressure Washing for Driveways & Patios',
    seoDescription:
      'Even, streak-free pressure washing for driveways, patios, and pool decks in greater Puget Sound. Commercial equipment, targeted stain treatment — from $395.',
  },
  {
    slug: 'vehicle-detailing',
    name: 'Vehicle Detailing',
    eyebrow: 'Concours-level care',
    short:
      'Hand washing, paint correction, and ceramic protection for luxury and collector vehicles, performed at your residence.',
    intro: [
      'A fine automobile deserves better than a drive-through tunnel and a leaf blower. Our detailing team works by hand, at your residence, with the same methodical process used to prepare cars for the concours lawn.',
      'From a maintenance-grade signature detail to multi-stage paint correction under inspection lighting, every service is documented, photographed, and finished to a standard you can measure in gloss units.',
    ],
    features: [
      {
        title: 'We come to you',
        detail: 'Fully self-contained mobile studio — water, power, and lighting arrive with us.',
      },
      {
        title: 'Measured, not guessed',
        detail: 'Paint thickness readings before any correction; gloss readings after. You see the numbers.',
      },
      {
        title: 'Certified ceramic installers',
        detail: 'Accredited application of professional-grade coatings with registered warranties.',
      },
    ],
    process: [
      { title: 'Consultation', detail: 'We assess paint condition, prior work, and your goals for the vehicle — daily driver, show car, or investment.' },
      { title: 'Decontamination', detail: 'Foam pre-wash, hand wash, and mechanical decontamination strip bonded contaminants safely.' },
      { title: 'Correction & enhancement', detail: 'Machine polishing under inspection lighting removes swirl, haze, and defects to the agreed level.' },
      { title: 'Protection', detail: 'Sealant or ceramic coating is applied, cured, and documented with care instructions.' },
    ],
    pricing: [
      {
        name: 'Signature Detail',
        price: 'from $395',
        summary: 'The maintenance standard for cared-for vehicles.',
        includes: ['Foam pre-wash & hand wash', 'Interior deep clean & conditioning', 'Wheel, tire & glass detail', '6-month paint sealant'],
      },
      {
        name: 'Paint Correction',
        price: 'from $795',
        summary: 'Machine polishing to remove swirl marks, haze, and defects.',
        includes: ['Paint depth measurement', 'Single or multi-stage correction', 'Inspection-light verification', 'Sealant or coating prep finish'],
        featured: true,
      },
      {
        name: 'Ceramic Coating',
        price: 'from $1,495',
        summary: 'Multi-year professional-grade protection, installed and registered.',
        includes: ['Full correction included', 'Professional-grade ceramic system', 'Wheels-off option available', 'Registered multi-year warranty'],
      },
    ],
    pricingNote:
      'Pricing varies with vehicle size and paint condition. Collector and exotic vehicles are quoted individually after inspection.',
    faqs: [
      {
        question: 'Do you really detail at my home?',
        answer:
          'Yes — our mobile studio carries its own filtered water, power, and lighting. We need only a flat place to park. Garage or porte-cochère work is ideal but not required.',
      },
      {
        question: 'How long does ceramic coating last?',
        answer:
          'The professional systems we install carry registered warranties of two to seven years depending on the tier chosen, maintained with an annual inspection wash.',
      },
      {
        question: 'Can you maintain multiple vehicles on a schedule?',
        answer:
          'That is exactly what our Estate Program is for — recurring care for a household fleet on one calendar, with one point of contact.',
      },
    ],
    image: 'vehicle',
    imageAlt:
      'Detailer hand-polishing the fender of a deep emerald green luxury sedan with water beading on ceramic-coated paint',
    seoTitle: 'Mobile Luxury Vehicle Detailing',
    seoDescription:
      'Concours-level mobile detailing for luxury and collector cars in greater Puget Sound. Hand wash, paint correction, certified ceramic coating — from $395.',
  },
  {
    slug: 'aircraft-detailing',
    name: 'Aircraft Detailing',
    eyebrow: 'Ramp to hangar',
    short:
      'Exterior wash, brightwork polishing, and ceramic protection for private aircraft, performed to your maintenance team’s standards.',
    intro: [
      'Aircraft detailing is a different discipline: static ports, pitot tubes, sensors, and avionics demand a crew that works from checklists, not habit. Ours does — every wash is logged, masked, and signed off like the maintenance event it is.',
      'From a turboprop wet wash to full brightwork restoration on a light jet, we work at your hangar or FBO, coordinated with your flight schedule and maintenance calendar.',
    ],
    features: [
      {
        title: 'Checklist discipline',
        detail: 'Sensitive areas are masked and logged per aircraft type. Every job closes with a documented inspection.',
      },
      {
        title: 'Hangar or ramp',
        detail: 'Self-contained water reclamation lets us work wherever your aircraft sits, within airport regulations.',
      },
      {
        title: 'Aviation-grade products',
        detail: 'Cleaners and coatings meet Boeing D6-17487 / AMS 1526 specifications — nothing corrosive, nothing improvised.',
      },
    ],
    process: [
      { title: 'Coordination', detail: 'We schedule around your flight calendar and confirm access, power, and reclamation requirements with the FBO.' },
      { title: 'Mask & protect', detail: 'Static ports, pitots, sensors, and intakes are masked and logged on the aircraft checklist.' },
      { title: 'Wash & detail', detail: 'Wet or dry wash per your maintenance team’s preference, with brightwork and de-ice boots treated appropriately.' },
      { title: 'Inspection & log', detail: 'Masking is removed against the checklist, the work is inspected, and a completion record is delivered.' },
    ],
    pricing: [
      {
        name: 'Exterior Wet Wash',
        price: 'from $1,850',
        summary: 'Complete exterior wash for singles, turboprops, and light jets.',
        includes: ['Full checklist masking protocol', 'Aviation-spec wash chemistry', 'De-bug & leading edge detail', 'Completion documentation'],
      },
      {
        name: 'Brightwork Polish',
        price: 'from $2,400',
        summary: 'Multi-stage metal polishing for spinners, leading edges, and trim.',
        includes: ['Graduated compound stages', 'Mirror-finish hand passes', 'Protective sealant application', 'Before/after photo record'],
        featured: true,
      },
      {
        name: 'Ceramic Protection',
        price: 'from $7,500',
        summary: 'Full-fuselage ceramic coating to reduce drag, staining, and wash frequency.',
        includes: ['Paint decontamination & prep', 'Aviation-approved ceramic system', 'Reduced exhaust staining adhesion', 'Multi-year documented warranty'],
      },
    ],
    pricingNote:
      'Pricing shown for aircraft up to light-jet class. Midsize and larger airframes, and fleet agreements, are quoted after a hangar visit.',
    faqs: [
      {
        question: 'Are your products approved for aircraft?',
        answer:
          'Yes. We use cleaners and coatings tested to Boeing D6-17487 and AMS 1526 standards, and we can supply product documentation to your maintenance team before work begins.',
      },
      {
        question: 'Can you work at our FBO?',
        answer:
          'In most cases, yes. We carry self-contained water and reclamation equipment and coordinate insurance and access requirements with the FBO directly.',
      },
      {
        question: 'Do you offer recurring aircraft care?',
        answer:
          'We maintain standing schedules for owners and flight departments — typically a monthly exterior wash with quarterly detail service, adjusted to your utilization.',
      },
    ],
    image: 'aircraft',
    imageAlt:
      'Freshly detailed private jet with a gleaming white fuselage inside a modern hangar',
    seoTitle: 'Private Aircraft Detailing',
    seoDescription:
      'Checklist-driven aircraft detailing at your hangar or FBO: exterior wash, brightwork polishing, and aviation-approved ceramic coating for private aircraft.',
  },
  {
    slug: 'watercraft-detailing',
    name: 'Watercraft Detailing',
    eyebrow: 'Dockside service',
    short:
      'Hull-to-helm washing, oxidation removal, and marine ceramic protection for yachts and boats, at your slip or on the hard.',
    intro: [
      'Puget Sound is hard on gelcoat. Salt, UV, and algae dull a hull faster than anywhere inland — and neglect compounds quietly until a $500 polish becomes a $5,000 restoration.',
      'We service vessels dockside at your marina or on the hard: routine wash-downs that protect your finish, multi-stage compounding that brings oxidized gelcoat back to gloss, and marine ceramic systems that keep it there season after season.',
    ],
    features: [
      {
        title: 'Dockside or dry dock',
        detail: 'We work at your slip, your lift, or the yard — with marina-compliant products and containment.',
      },
      {
        title: 'Gelcoat specialists',
        detail: 'Oxidation is corrected in measured stages, preserving gelcoat thickness for the life of the vessel.',
      },
      {
        title: 'Season-long protection',
        detail: 'Marine ceramic and polymer systems shrug off salt, guano, and waterline scum between washes.',
      },
    ],
    process: [
      { title: 'Vessel assessment', detail: 'We evaluate gelcoat condition, oxidation depth, and brightwork at the slip and quote per foot, in writing.' },
      { title: 'Wash-down', detail: 'Hull, deck, and superstructure are washed with marina-safe products and spot-free rinsed.' },
      { title: 'Correction', detail: 'Compounding and polishing restore gloss in measured stages appropriate to the gelcoat’s condition.' },
      { title: 'Protection', detail: 'Wax, polymer, or marine ceramic is applied and documented, with a maintenance schedule for the season.' },
    ],
    pricing: [
      {
        name: 'Wash & Wax',
        price: 'from $28',
        unit: 'per foot',
        summary: 'The maintenance standard for cared-for vessels.',
        includes: ['Hull & topside wash-down', 'Spot-free rinse & dry', 'Hand-applied marine wax', 'Stainless & glass detail'],
      },
      {
        name: 'Oxidation Removal',
        price: 'from $55',
        unit: 'per foot',
        summary: 'Multi-stage compounding to restore chalked, faded gelcoat.',
        includes: ['Measured compounding stages', 'Machine polish to full gloss', 'Polymer sealant finish', 'Before/after photo record'],
        featured: true,
      },
      {
        name: 'Marine Ceramic',
        price: 'from $95',
        unit: 'per foot',
        summary: 'Multi-season ceramic protection for hull and topsides.',
        includes: ['Full correction included', 'Marine-grade ceramic system', 'Waterline stain resistance', 'Seasonal inspection included'],
      },
    ],
    pricingNote:
      'Per-foot pricing applies to vessels to 60 feet; larger yachts and full-brightwork projects are quoted after inspection.',
    faqs: [
      {
        question: 'Can you work at my marina?',
        answer:
          'Almost certainly. We carry marina-compliant products and containment, and we already service most major marinas across the Sound. We handle any access coordination for you.',
      },
      {
        question: 'My hull is chalky — is it too far gone?',
        answer:
          'Rarely. Even heavily oxidized gelcoat usually restores well with staged compounding. We assess thickness first and tell you honestly what result to expect before you commit.',
      },
      {
        question: 'Is ceramic coating worth it on a boat?',
        answer:
          'For vessels kept in the water, usually yes — it dramatically slows waterline staining and UV chalking, and cuts routine wash effort roughly in half. We review your moorage and usage before recommending it.',
      },
    ],
    image: 'watercraft',
    imageAlt:
      'Luxury motor yacht with a freshly polished navy hull moored at a calm marina at dawn',
    seoTitle: 'Yacht & Boat Detailing',
    seoDescription:
      'Dockside yacht and boat detailing across Puget Sound: wash-downs from $28/ft, oxidation removal, and marine ceramic coating — at your slip or on the hard.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
