// ============================================================================
// Jabal Dreams — central content source.
// All copy, brand constants, services, and image references live here so the
// site stays consistent and is trivial to update.
//
// NOTE: The source brochure refers to the company as "JD Events". The website
// domain, repository, and existing brand identity use "Jabal Dreams" (JD).
// We treat "Jabal Dreams" as the public brand and "JD" as the monogram.
// Flip BRAND.name in one place if the client prefers "JD Events".
// ============================================================================

export const BRAND = {
  name: "Jabal Dreams",
  monogram: "JD",
  tagline: "Preserving the Past, Crafting the Future.",
  location: "Muscat, Oman",
  email: "jabaldreams@gmail.com",
  phone: "+968 9910 6834", // TODO: confirm real number (placeholder)
  domain: "jabaldreams.com",
  established: "2026",
  disciplines: [
    "Architectural Art",
    "Heritage Restoration",
    "Creative Fabrication",
    "Scale Modeling",
    "Sculptures",
  ],
} as const;

// Rotating hero headline phrases (taken from the brochure cover).
export const HERO_PHRASES = [
  { lead: "Preserving", accent: "Heritage" },
  { lead: "Creating", accent: "Landmarks" },
  { lead: "Transforming", accent: "Spaces" },
] as const;

export const HERO_INTRO =
  "A specialized creative fabrication, architectural enhancement, and heritage restoration studio based in Muscat, Oman — turning concepts into distinctive architectural and artistic realities.";

// ---------------------------------------------------------------------------
// About / intro
// ---------------------------------------------------------------------------
export const ABOUT = {
  eyebrow: "Who We Are",
  title: "Where artistry meets architecture",
  paragraphs: [
    "Jabal Dreams is a specialized creative fabrication, architectural enhancement, and heritage restoration company based in Muscat, Oman. We collaborate with architects, interior designers, engineers, consultants, developers, contractors, and government entities to transform concepts into distinctive architectural and artistic realities.",
    "Our expertise combines artistic creativity, technical precision, and skilled craftsmanship to deliver sculptural features, textured finishes, architectural elements, heritage restoration works, and highly detailed scale models for a wide range of projects across Oman.",
    "From concept development to final installation, we provide customized solutions that enhance the visual identity, functionality, and cultural value of every space.",
  ],
};

export const STATS = [
  { value: "12+", label: "Disciplines Mastered" },
  { value: "100%", label: "Custom Fabrication" },
  { value: "Oman", label: "Wide Project Reach" },
  { value: "Turnkey", label: "Concept to Installation" },
];

// ---------------------------------------------------------------------------
// Services (the specialized services, with representative imagery)
// ---------------------------------------------------------------------------
export type Service = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
  itemsLabel: "Services Include" | "Applications";
  image: { src: string; w: number; h: number };
  icon: string; // lucide icon name key (resolved in component)
};

export const SERVICES: Service[] = [
  {
    id: "heritage",
    title: "Heritage Restoration & Archaeological Conservation",
    blurb:
      "Restoration, conservation support, and renovation of heritage structures, forts, archaeological monuments, and culturally significant buildings — preserving historical authenticity while integrating modern, durable techniques.",
    itemsLabel: "Services Include",
    items: [
      "Archaeological Monument Restoration",
      "Heritage Building Restoration & Conservation",
      "Fort Rehabilitation & Enhancement",
      "Traditional Architectural Repairs",
      "Historical Façade Restoration",
      "Decorative Surface Recreation",
      "Texture & Mural Restoration",
      "Architectural Feature Reconstruction",
      "Custom Sculptural Replication",
      "Adaptive Reuse of Heritage Spaces",
    ],
    image: { src: "/portfolio/jd-06.webp", w: 551, h: 411 },
    icon: "Landmark",
  },
  {
    id: "sculptural",
    title: "Sculptural Wall Art",
    blurb:
      "Custom-designed sculptural installations that create powerful visual statements and become focal points within architectural spaces.",
    itemsLabel: "Applications",
    items: [
      "Artistic Relief Sculptures",
      "Feature Walls",
      "Decorative Architectural Elements",
      "Custom Thematic Installations",
      "Contemporary & Organic Designs",
      "Interior & Exterior Sculptural Features",
    ],
    image: { src: "/portfolio/jd-07.webp", w: 551, h: 411 },
    icon: "Shapes",
  },
  {
    id: "features-3d",
    title: "3D Architectural Features",
    blurb:
      "Unique three-dimensional architectural elements that add depth, texture, and character to interior and exterior environments.",
    itemsLabel: "Applications",
    items: [
      "Hotel Lobbies",
      "Reception Areas",
      "Corporate Offices",
      "Retail Spaces",
      "Restaurants & Cafés",
      "Villas & Residential Projects",
    ],
    image: { src: "/portfolio/jd-08.webp", w: 551, h: 551 },
    icon: "Boxes",
  },
  {
    id: "murals",
    title: "Texture Murals & Decorative Finishes",
    blurb:
      "Creative wall treatments that combine artistic expression with architectural enhancement, in modern and traditional finishes.",
    itemsLabel: "Services Include",
    items: [
      "Handcrafted Texture Murals",
      "Decorative Textured Surfaces",
      "Artistic Wall Compositions",
      "Custom Design Patterns",
      "Modern & Traditional Finishes",
      "Interior & Exterior Applications",
    ],
    image: { src: "/portfolio/jd-10.webp", w: 552, h: 375 },
    icon: "Brush",
  },
  {
    id: "acoustic",
    title: "Acoustic & Soundproofing Solutions",
    blurb:
      "Functional acoustic treatments designed to improve sound quality while maintaining aesthetic appeal.",
    itemsLabel: "Applications",
    items: [
      "Offices",
      "Conference Rooms",
      "Studios",
      "Home Theaters",
      "Hospitality Venues",
      "Commercial Spaces",
    ],
    image: { src: "/portfolio/jd-11.webp", w: 535, h: 317 },
    icon: "AudioLines",
  },
  {
    id: "water",
    title: "Interior & Exterior Water Features",
    blurb:
      "Custom-designed water features that introduce movement, elegance, and tranquility into architectural environments.",
    itemsLabel: "Services Include",
    items: [
      "Decorative Waterfalls",
      "Feature Water Walls",
      "Indoor Water Installations",
      "Outdoor Water Features",
      "Landscape Water Elements",
      "Custom Fountain Concepts",
    ],
    image: { src: "/portfolio/jd-12.webp", w: 551, h: 411 },
    icon: "Waves",
  },
  {
    id: "scale-models",
    title: "Miniature Scale Modeling",
    blurb:
      "Highly detailed architectural and engineering scale models that assist in project visualization and presentation.",
    itemsLabel: "Applications",
    items: [
      "Architectural Projects",
      "Urban Planning Developments",
      "Heritage Restoration Proposals",
      "Engineering Presentations",
      "Marketing & Exhibitions",
      "Architectural Competitions",
      "Investor & Client Presentations",
    ],
    image: { src: "/portfolio/jd-13.webp", w: 551, h: 411 },
    icon: "Component",
  },
];

// ---------------------------------------------------------------------------
// Specialized expertise (page 4)
// ---------------------------------------------------------------------------
export const EXPERTISE: string[] = [
  "Archaeological Monument Restoration",
  "Heritage Building Restoration & Conservation",
  "Fort Renovation & Traditional Architecture Preservation",
  "Sculptural Wall Art",
  "3D Architectural Features",
  "Texture Murals & Decorative Finishes",
  "Acoustic & Soundproofing Solutions",
  "Interior & Exterior Waterfalls",
  "Architectural Miniature Scale Models",
  "Custom Creative Fabrication",
];

// ---------------------------------------------------------------------------
// Consultancy (page 4)
// ---------------------------------------------------------------------------
export const CONSULTANCY = {
  eyebrow: "Design & Material Consultancy",
  title: "Guidance from the first sketch to final installation",
  intro:
    "Jabal Dreams provides professional consultation for architects, interior designers, engineers, developers, and project owners during the design and planning stages of a project. Our expertise helps clients achieve visually impactful, technically feasible, and cost-effective solutions.",
  items: [
    "Architectural Feature Design Consultation",
    "Sculptural Art & Landmark Design Development",
    "3D Wall & Texture Concept Design",
    "Interior Rock Formation & Artificial Rock Design",
    "Decorative Surface & Texture Painting Consultation",
    "Color Scheme & Material Selection",
    "Artistic Theme Development",
    "Material Specification & Recommendation",
    "Fabrication Methodology Planning",
    "Installation Strategy & Technical Guidance",
    "Cost Optimization & Value Engineering",
    "Prototype & Mock-up Development",
    "Custom Architectural Feature Detailing",
    "Project Feasibility Assessment",
  ],
};

// ---------------------------------------------------------------------------
// Industries we serve (page 4)
// ---------------------------------------------------------------------------
export const INDUSTRIES: string[] = [
  "Architecture Firms",
  "Interior Design Companies",
  "Engineering Consultants",
  "Property Developers",
  "Hospitality Projects",
  "Retail Brands",
  "Government Institutions",
  "Public Sector Developments",
  "Event & Exhibition Companies",
  "Residential Projects",
  "Heritage Conservation Projects",
];

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------
export const PROCESS = [
  {
    step: "01",
    title: "Concept Development",
    text: "We translate your vision into a feasible artistic direction, exploring form, material, and narrative.",
  },
  {
    step: "02",
    title: "Design & Consultancy",
    text: "Detailed feature design, material selection, and value engineering ensure beauty meets buildability.",
  },
  {
    step: "03",
    title: "Fabrication & Craft",
    text: "Skilled craftsmanship and technical precision bring sculptures, textures, and features to life.",
  },
  {
    step: "04",
    title: "Final Installation",
    text: "We deliver and install on site, enhancing the visual identity, function, and cultural value of the space.",
  },
];

// ---------------------------------------------------------------------------
// Gallery — curated portfolio imagery (higher-resolution assets only).
// ---------------------------------------------------------------------------
export type GalleryItem = { src: string; w: number; h: number };

export const FEATURE_IMAGE: GalleryItem = { src: "/portfolio/jd-34.webp", w: 1024, h: 1024 };
export const HERO_IMAGE: GalleryItem = { src: "/portfolio/jd-02.webp", w: 1069, h: 798 };

export const GALLERY: GalleryItem[] = [
  { src: "/portfolio/jd-22.webp", w: 551, h: 738 },
  { src: "/portfolio/jd-18.webp", w: 551, h: 411 },
  { src: "/portfolio/jd-23.webp", w: 551, h: 551 },
  { src: "/portfolio/jd-43.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-24.webp", w: 551, h: 551 },
  { src: "/portfolio/jd-19.webp", w: 551, h: 411 },
  { src: "/portfolio/jd-44.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-25.webp", w: 551, h: 551 },
  { src: "/portfolio/jd-31.webp", w: 551, h: 336 },
  { src: "/portfolio/jd-36.webp", w: 698, h: 698 },
  { src: "/portfolio/jd-45.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-27.webp", w: 551, h: 411 },
  { src: "/portfolio/jd-39.webp", w: 724, h: 724 },
  { src: "/portfolio/jd-46.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-28.webp", w: 551, h: 413 },
  { src: "/portfolio/jd-41.webp", w: 724, h: 724 },
  { src: "/portfolio/jd-47.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-30.webp", w: 551, h: 551 },
  { src: "/portfolio/jd-48.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-42.webp", w: 692, h: 517 },
  { src: "/portfolio/jd-49.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-32.webp", w: 470, h: 433 },
  { src: "/portfolio/jd-50.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-54.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-58.webp", w: 425, h: 425 },
  { src: "/portfolio/jd-56.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-59.webp", w: 425, h: 425 },
  { src: "/portfolio/jd-57.webp", w: 755, h: 431 },
  { src: "/portfolio/jd-60.webp", w: 425, h: 426 },
  { src: "/portfolio/jd-61.webp", w: 425, h: 426 },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
