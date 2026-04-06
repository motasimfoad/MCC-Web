const cleaningServicesLinks = [
  {
    route: "/cleaning-services/commercial-cleaning",
    title: "COMMERCIAL CLEANING",
  },
  {
    route: "/cleaning-services/industrial-cleaning",
    title: "INDUSTRIAL CLEANING",
  },
  { route: "/cleaning-services/storage-cleaning", title: "STORAGE CLEANING" },
  {
    route: "/cleaning-services/educational-cleaning",
    title: "EDUCATIONAL INSTITUTION CLEANING",
  },
  {
    route: "/cleaning-services/move-in-&-out-cleaning",
    title: "MOVE IN / MOVE OUT CLEANING",
  },
  {
    route: "/cleaning-services/disinfection-cleaning",
    title: "DISINFECTION SERVICE",
  },
  {
    route: "/cleaning-services/hospital-cleaning",
    title: "HOSPITAL & CLINIC CLEANING",
  },
  {
    route: "/cleaning-services/post-construction-cleaning",
    title: "POST CONSTRUCTION CLEANING",
  },
  {
    route: "/cleaning-services/janitorial-cleaning",
    title: "JANITORIAL SERVICES",
  },
  {
    route: "/cleaning-services/window-cleaning",
    title: "WINDOW CLEANING SERVICES",
  },
  {
    route: "/cleaning-services/office-cleaning",
    title: "OFFICE CLEANING SERVICES",
  },
  {
    route: "/cleaning-services/airbnb-cleaning",
    title: "AIRBNB CLEANING SERVICES",
  },
];

const whyChooseUsLinks = [
  { route: "/how-we-work", title: "How We Work" },
  { route: "/why-choose-us", title: "Why Choose Us" },
  { route: "/what-our-clients-say", title: "What Our Clients Say" },
  { route: "/surface-disinfection", title: "Surface Disinfection" },
  {
    route: "/environmentally-responsible",
    title: "Environmentally Responsible",
  },
  { route: "/faqs", title: "Frequently Asked Questions (FAQs)" },
];

const resourcesLinks = [
  { route: "/resources/blogs", title: "Blogs" },
  { route: "/testimonials", title: "Testimonials" },
];

export const navbar_links = [
  { route: "/", title: "Home" },
  { route: "/about", title: "About", routes: whyChooseUsLinks },
  {
    route: "/cleaning-services",
    title: "Cleaning Services",
    routes: cleaningServicesLinks,
  },
  // { route: "/resources", title: "Resources", routes: resourcesLinks },
  { route: "/locations", title: "Locations" },
  { route: "/contact", title: "Contact" },
];
