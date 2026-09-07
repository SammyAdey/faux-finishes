export const site = {
  name: "Faux Finishes",
  tagline: "Premier painting services since 1992",
  description:
    "Industry-leading paints and protective coatings across Australia — major projects, remote sites, and specialised finishes.",
  phone: "(07) 3216 0876",
  phoneHref: "tel:+61732160876",
  mobile: "0418 887 158",
  mobileHref: "tel:+61418887158",
  address: {
    line1: "25 Edgar Street",
    line2: "Bowen Hills Qld 4006",
  },
  social: {
    facebook:
      "https://www.facebook.com/Faux-Finishes-Painters-721760808219317/",
    linkedin:
      "https://www.linkedin.com/company/faux-finishes-painters/about/",
  },
  established: 1992,
} as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "major-projects",
    title: "Major Projects",
    summary:
      "From multi-storey buildings to road tunnels, we paint projects anywhere in Australia.",
    description:
      "Our teams deliver painting and protective coating programs for large-scale construction — highrise, commercial cores, infrastructure, and civil works — with the labour, plant, and systems to keep programmes on track.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Commercial highrise building exterior",
  },
  {
    slug: "complex-environments",
    title: "Complex Environments",
    summary:
      "Intrinsically safe tools and methods for demanding, high-risk environments.",
    description:
      "We work where standard approaches fall short: live facilities, confined spaces, and sites that require specialised equipment, permits, and proven safe work methods.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Industrial facility interior",
  },
  {
    slug: "remote-area-projects",
    title: "Remote Area Projects",
    summary:
      "Logistics experience from Christmas Island to remote Northern Territory sites.",
    description:
      "Getting skilled labour and materials to remote destinations is part of our craft. We plan mobilisation, accommodation, and supply chains so remote programmes stay productive.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Remote Australian landscape",
  },
  {
    slug: "maintenance-and-remedial-works",
    title: "Maintenance and Remedial Works",
    summary:
      "Inspections, repair, repainting, resealing, and ongoing maintenance programs.",
    description:
      "Extend asset life with structured maintenance: surface evaluation, targeted repair, coating renewal, and scheduled programmes that reduce long-term cost.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Building facade maintenance context",
  },
  {
    slug: "specialised-coatings-and-finishes",
    title: "Specialised Coatings and Finishes",
    summary:
      "Expert systems for interior and exterior substrates.",
    description:
      "We specify and apply coating systems matched to substrate, exposure, and performance requirements — from architectural finishes to industrial protective coatings.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Finished commercial interior space",
  },
  {
    slug: "rendering",
    title: "Rendering",
    summary:
      "Professional solid plastering and rendering applied efficiently on site.",
    description:
      "Our rendering teams deliver consistent, durable finishes for new builds and remediation, coordinated with coating programmes for a complete envelope solution.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rendered residential exterior",
  },
  {
    slug: "epoxy-floor",
    title: "Epoxy Floor",
    summary:
      "Durable epoxy flooring systems for commercial and industrial spaces.",
    description:
      "High-performance epoxy floor systems for warehouses, plant rooms, retail, and facilities that need chemical resistance, cleanability, and lasting appearance.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean commercial floor surface",
  },
  {
    slug: "textured-finishes",
    title: "Textured Finishes",
    summary:
      "Distinctive interior and exterior texture systems for architectural character.",
    description:
      "From subtle aggregate textures to bold architectural effects, we finish surfaces with the craftsmanship that defines a project’s look.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Textured architectural interior wall",
  },
  {
    slug: "sign-writing-and-line-marking",
    title: "Sign Writing and Line Marking",
    summary:
      "Line marking, car park signage, and stencil work.",
    description:
      "Clear, durable line marking and sign writing for car parks, warehouses, and public spaces — installed to specification and traffic requirements.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Car park line marking",
  },
  {
    slug: "graffiti-removal",
    title: "Graffiti Removal",
    summary:
      "Removal services and anti-graffiti coating systems.",
    description:
      "Fast graffiti response plus protective anti-graffiti coatings that make future cleaning faster and less damaging to substrates.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean building exterior wall",
  },
  {
    slug: "colour-consultancy",
    title: "Colour Consultancy",
    summary:
      "Colour and finish guidance for project and residential schemes.",
    description:
      "We help builders, architects, and owners select colour and finish strategies that perform on site and hold up over time.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Interior colour and finish scheme",
  },
  {
    slug: "lead-paint-removal",
    title: "Lead Paint Removal",
    summary:
      "Compliant lead paint identification and safe removal.",
    description:
      "Controlled lead paint removal with appropriate containment, disposal, and reinstatement — protecting workers, occupants, and the surrounding environment.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Heritage building exterior restoration",
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    summary:
      "Waterproofing systems coordinated with coatings and remedial works.",
    description:
      "We apply and integrate waterproofing solutions as part of envelope protection and remedial programmes where moisture control is critical.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Building envelope and exterior surfaces",
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  status: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "111-eagle-st-brisbane",
    title: "111 Eagle St, Brisbane",
    client: "Leighton Contractors / GPT Group",
    location: "Brisbane, QLD",
    status: "Completed",
    summary:
      "Painting works on Brisbane’s tallest office tower, designed by Cox Rayner Architects.",
    description:
      "111 Eagle Street is among Brisbane’s landmark commercial towers. Constructed by Leighton Contractors for the GPT Group and designed by Cox Rayner Architects, the project demanded precision finishes at height and coordination across a complex commercial programme.",
    image: "/projects/modern-facade.png",
    imageAlt: "Modern mixed-use building facade with clean architectural finishes",
  },
  {
    slug: "raaf-amberley",
    title: "RAAF Amberley",
    client: "Defence / Air Force",
    location: "Amberley, QLD",
    status: "Completed",
    summary:
      "Support works for a major redevelopment of Australia’s largest operational Air Force base.",
    description:
      "RAAF Amberley is the Air Force’s largest operational base. During a significant redevelopment programme, Faux Finishes delivered painting and coating works suited to defence facility requirements and operational constraints.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Contemporary multi-storey apartment building exterior",
  },
  {
    slug: "lady-cilento-childrens-hospital-qch",
    title: "Lady Cilento Children’s Hospital (QCH)",
    client: "Health infrastructure",
    location: "Brisbane, QLD",
    status: "Completed",
    summary:
      "Finishes for Queensland’s major paediatric hospital project.",
    description:
      "Lady Cilento Children’s Hospital brought together paediatric care for Queensland. Our teams contributed painting and coating works within a sensitive healthcare construction environment.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern residential building facade under clear sky",
  },
  {
    slug: "bhp-billiton-groote-eylandt",
    title: "BHP Billiton – Groote Eylandt",
    client: "BHP Billiton",
    location: "Groote Eylandt, NT",
    status: "Completed",
    summary:
      "Repainting of fuel tank farm facilities in a remote industrial setting.",
    description:
      "When BHP Billiton required repainting of its fuel tank farm on Groote Eylandt, Faux Finishes delivered the remote mobilisation, protective coatings expertise, and site discipline the work demanded.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Clean contemporary building exterior with refined finishes",
  },
  {
    slug: "christmas-island-iprc",
    title: "Christmas Island IPRC",
    client: "Baulderstone (Lend Lease)",
    location: "Christmas Island",
    status: "Completed",
    summary:
      "Full logistical mobilisation of team and materials for the IPRC construction programme.",
    description:
      "When Baulderstone (now Lend Lease) constructed the Christmas Island IPRC, Faux Finishes had the logistical experience to put team and materials onsite for the duration of the project.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern architectural building with precise exterior detailing",
  },
  {
    slug: "project-and-residential-housing",
    title: "Project and Residential Housing",
    client: "Project builders & homeowners",
    location: "Queensland & Australia-wide",
    status: "Ongoing programmes",
    summary:
      "Volume project housing finishes alongside residential repaints and refurbishments.",
    description:
      "Alongside our major project portfolio, Faux Finishes completes work for project builders and the repainting of existing residences — delivering consistent quality from first coat to handover.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Contemporary residential house with clean facade finishes",
  },
];

export const capabilityList = [
  "Major Projects",
  "Office and Shop Fitting",
  "Project and Residential Housing",
  "Complex Environments",
  "Remote Area Projects",
  "Maintenance and Remediation",
  "Specialised Coatings and Finishes",
  "Solid Plastering (Rendering)",
  "Texture Finishes",
  "Sign Writing & Line Marking",
  "Graffiti Services",
] as const;

export const recentProjects = [
  "111 Eagle Street – Leighton Contractors",
  "QUT Gardens Point – Leighton Contractors",
  "Groote Eylandt Fuel Tank Facilities – BHP Billiton",
  "Tarong Power Station – Tarong Energy",
  "Christmas Island IPRC – Baulderstone",
  "Canvas Apartments, South Brisbane – Pradella",
  "Queensland Bioscience Precinct, UQ – Baulderstone",
] as const;

export const nav = {
  primary: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  services: services.map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
  projects: projects.map((p) => ({ href: `/projects/${p.slug}`, label: p.title })),
  about: [{ href: "/policies-governance", label: "Policies / Governance" }],
} as const;
