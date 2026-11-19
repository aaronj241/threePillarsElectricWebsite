// Stores company details and the service copy used across the website.
export const company = {
  name: 'Three Pillar Electric',
  licence: '7019256',
  // The project page displays each contact link once its value is filled in.
  contact: {
    email: '',
    phone: '',
  },
};

// Service IDs are shared by the homepage links and the project form's service options.
export const services = [
  {
    id: 'residential',
    title: 'Residential',
    icon: 'home',
    image: 'residential-breakers.webp',
    alt: 'Circuit breakers in an electrical panel',
    description: 'Electrical work for repairs, renovations, and new homes.',
    examples: ['Wiring and panel upgrades', 'Lighting, outlets, and dedicated circuits', 'Repairs and troubleshooting'],
    action: 'Plan residential work',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: 'building',
    image: 'commercial-electrical-room.webp',
    alt: 'Electrical distribution equipment in a commercial facility',
    description: 'Electrical installations and ongoing support for businesses and commercial properties.',
    examples: ['New construction and tenant fit-outs', 'Distribution and equipment connections', 'Lighting retrofits and maintenance'],
    action: 'Plan commercial work',
  },
  {
    id: 'energy',
    title: 'EV & Solar',
    icon: 'bolt',
    image: 'ev-charging.webp',
    alt: 'Electric vehicles connected to chargers in a parking area',
    description: 'Electrical upgrades to support charging, solar, and backup power.',
    examples: ['Home and commercial EV charging', 'Solar electrical integration', 'Backup power and load management'],
    action: 'Explore modern energy',
  },
] as const;

// The Modern Energy section expands on the EV and solar service card.
export const energyServices = [
  {
    icon: 'plug',
    title: 'EV charging',
    description: 'Level 2 home chargers, workplace and multi-unit charging, and electrical capacity assessments.',
  },
  {
    icon: 'sun',
    title: 'Solar integration',
    description: 'Electrical preparation and connections for solar equipment, inverters, and compatible battery storage.',
  },
  {
    icon: 'gauge',
    title: 'Efficiency & backup power',
    description: 'LED retrofits, smart controls, and electrical connections for standby and backup equipment.',
  },
] as const;

// The About section uses these cards to explain how the company works.
export const values = [
  {
    icon: 'shield',
    title: 'Safety first',
    description: 'We plan work around electrical safety, applicable codes, and inspection requirements.',
  },
  {
    icon: 'tool',
    title: 'Quality workmanship',
    description: 'We choose materials and installation methods to suit the property and the work it needs to support.',
  },
  {
    icon: 'message',
    title: 'Clear communication',
    description: 'We explain the scope, schedule, and what to expect throughout the job.',
  },
] as const;
