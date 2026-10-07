// Supply approved assets and quotes here. Missing content is never presented as real.
export type Brand = { name: string; logo?: string };
export const accreditations: Brand[] = [
  { name: "CM3", logo: "/brands/cm3.png" }, { name: "Dulux Accredited Painter", logo: "/brands/dulux.png" },
  { name: "Master Builders Queensland", logo: "/brands/master-builders.png" }, { name: "QBCC", logo: "/brands/qbcc.png" },
  { name: "WorkCover Queensland", logo: "/brands/workcover.png" },
];
export const partners: Brand[] = [
  { name: "Andbuild", logo: "/brands/andbuild.png" }, { name: "Formula Interiors", logo: "/brands/formula.png" }, { name: "UNITA", logo: "/brands/unita.svg" },
  { name: "Lendlease", logo: "/brands/lendlease.png" }, { name: "WATPAC", logo: "/brands/watpac.png" }, { name: "CPB Contractors", logo: "/brands/cpb.png" },
  { name: "John Holland", logo: "/brands/john-holland.svg" }, { name: "Belnic", logo: "/brands/belnic.png" }, { name: "Herron Coorey", logo: "/brands/herron-coorey.svg" }, { name: "ICM", logo: "/brands/icm.svg" },
];
export const teamPhoto: { src: string; alt: string } | null = null;
export type Testimonial = { quote: string; name: string; role?: string; company?: string; source?: string };
export const testimonials: Testimonial[] = [
  { quote: "Not just painters, they are perfectionists!! Going above what was required, they spent extra time in prepping the concrete floor…", name: "Guy Clothier", source: "https://reviews.birdeye.com/faux-finishes-166911190197000" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", name: "Placeholder testimonial 01", role: "Dummy copy for layout preview" },
  { quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", name: "Placeholder testimonial 02", role: "Dummy copy for layout preview" },
  { quote: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.", name: "Placeholder testimonial 03", role: "Dummy copy for layout preview" },
  { quote: "Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum, vestibulum id ligula porta felis euismod semper.", name: "Placeholder testimonial 04", role: "Dummy copy for layout preview" },
];
// Only the founding date is documented; other chapters deliberately have no invented dates.
export const story = [
  { label: "1992", title: "Painters of Distinction.", body: "Faux Finishes was established in 1992, beginning a commitment to premier painting services that continues today." },
  { label: "Major projects", title: "A place in Queensland’s skyline.", body: "Our portfolio includes 111 Eagle Street, RAAF Amberley and Lady Cilento Children’s Hospital — painting and coating works across commercial, defence and healthcare environments." },
  { label: "Beyond the mainland", title: "The experience to go further.", body: "From fuel tank facilities on Groote Eylandt to the Christmas Island IPRC, our teams bring the logistics and specialised coating expertise needed to deliver in remote locations." },
  { label: "Today", title: "The same care, on every site.", body: "We partner with builders, facility managers and asset owners across major projects, maintenance programmes and residential work. Every finish carries the same commitment to quality." },
];
export const projectLocations = [
  { id: "brisbane", name: "Brisbane", region: "Queensland", longitude: 153.0251, latitude: -27.4698, slugs: ["111-eagle-st-brisbane", "lady-cilento-childrens-hospital-qch"] },
  { id: "amberley", name: "Amberley", region: "Queensland", longitude: 152.711, latitude: -27.64, slugs: ["raaf-amberley"] },
  { id: "groote", name: "Groote Eylandt", region: "Northern Territory", longitude: 136.42, latitude: -13.97, slugs: ["bhp-billiton-groote-eylandt"] },
  { id: "christmas", name: "Christmas Island", region: "Indian Ocean", longitude: 105.63, latitude: -10.49, slugs: ["christmas-island-iprc"] },
];
