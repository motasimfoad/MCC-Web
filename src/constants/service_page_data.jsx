import { HolidayVillage } from "@mui/icons-material";
import { Work } from "@mui/icons-material";
import {
  Apartment,
  Factory,
  Warehouse,
  School,
  Cottage,
  Sanitizer,
  LocalHospital,
  Foundation,
  CleaningServices,
  Window,
} from "@mui/icons-material";

export const service_card_data = () => [
  {
    title: "COMMERCIAL CLEANING",
    route: "/commercial-cleaning",
    icon: <Apartment className="scale-[3]" />,
  },
  {
    title: "INDUSTRIAL CLEANING",
    route: "/industrial-cleaning",
    icon: <Factory className="scale-[3]" />,
  },
  {
    title: "STORAGE CLEANING",
    route: "/storage-cleaning",
    icon: <Warehouse className="scale-[3]" />,
  },
  {
    title: "EDUCATIONAL INSTITUTION CLEANING",
    route: "/educational-cleaning",
    icon: <School className="scale-[3]" />,
  },
  {
    title: "MOVE IN / MOVE OUT CLEANING",
    route: "/move-in-&-out-cleaning",
    icon: <Cottage className="scale-[3]" />,
  },
  {
    title: "DISINFECTION SERVICE",
    route: "/disinfection-cleaning",
    icon: <Sanitizer className="scale-[3]" />,
  },
  {
    title: "HOSPITAL & CLINIC CLEANING",
    route: "/hospital-cleaning",
    icon: <LocalHospital className="scale-[3]" />,
  },
  {
    title: "POST CONSTRUCTION CLEANING",
    route: "/post-construction-cleaning",
    icon: <Foundation className="scale-[3]" />,
  },
  {
    title: "JANITORIAL SERVICES",
    route: "/janitorial-cleaning",
    icon: <CleaningServices className="scale-[3]" />,
  },
  {
    title: "WINDOW CLEANING SERVICES",
    route: "/window-cleaning",
    icon: <Window className="scale-[3]" />,
  },
  {
    title: "OFFICE CLEANING SERVICES",
    route: "/office-cleaning",
    icon: <Work className="scale-[3]" />,
  },
  {
    title: "AIRBNB CLEANING SERVICES",
    route: "/airbnb-cleaning",
    icon: <HolidayVillage className="scale-[3]" />,
  },
];

export const defaultDetails = {
  title: "What We Offer",
  description: [
    "Just like every business is unique, its cleaning and maintenance needs are too. That's essentially what we offer; the dedication to dive deeper and recognize the specific needs of your business. Whether you have a posh hair salon, an art deco restaurant, or a busy office, our staff understands your unique needs to keep your space fresh and clean.",
    <span className="block h-4" key={4} />,
    "Toronto prides itself on its versatile nature of products, services, and experiences. Similarly, we pride ourselves on our cleaning skills to revamp our clients' businesses.",
  ],
};

export const service_description_data = [
  {
    route: "commercial-cleaning",
    heading: "Commercial Cleaning Services",
    subHeading: "Professional Commercial Cleaning for Your Business",
    description:
      "At Master Class Commercial Cleaning, we understand that a clean and organized business environment is essential for productivity and customer satisfaction. Our comprehensive commercial cleaning services are designed to meet the unique needs of your business, ensuring a pristine workplace that reflects your commitment to excellence.",
    details: [
      {
        title: "Tailored Cleaning Solutions for Every Business",
        description:
          "Whether you run a small office or a large corporate facility, our commercial cleaning services are tailored to fit your specific requirements. We offer flexible scheduling and customizable cleaning plans to ensure your business operates smoothly without any interruptions. Our team is equipped to handle all types of commercial spaces, including:",
        list_items: [
          "Offices",
          "Retail Stores",
          "Restaurants",
          "Warehouses",
          "Medical Facilities",
          "Educational Institutions",
        ],
      },
      {
        title: "Why Choose MCC Cleaning?",
        description:
          "Choosing MCC Cleaning means partnering with a reliable and experienced cleaning service provider dedicated to your satisfaction. Here's why businesses trust us:",
        list_items: [
          "Experienced Staff: Our trained and professional cleaning staff are committed to delivering high-quality service.",
          "Eco-Friendly Products:We use environmentally friendly cleaning products that are safe for your employees and customers.",
          "Customized Plans:Our cleaning plans are tailored to your specific needs and budget.",
          "Advanced Equipment:We use the latest cleaning technology and equipment to ensure efficient and effective cleaning.",
          "24/7 Availability:Our services are available around the clock to fit your schedule.",
        ],
      },
    ],
  },
  {
    route: "industrial-cleaning",
    heading: "Industrial Cleaning Services",
    subHeading: "Expert Industrial Cleaning for a Safe and Efficient Workplace",
    description:
      "At MCC Cleaning, we recognize the importance of maintaining a clean and safe industrial environment. Our industrial cleaning services are designed to address the unique challenges of industrial facilities, ensuring your operations run smoothly and safely.",
    details: [
      {
        title: "Customized Cleaning Solutions for Industrial Facilities",
        description:
          "Every industrial facility has its own set of cleaning needs. Whether you're managing a manufacturing plant, warehouse, or distribution center, our industrial cleaning services are customized to meet your specific requirements. We offer flexible scheduling and specialized cleaning plans to minimize downtime and disruption. Our team is equipped to handle various industrial spaces, including:",
        list_items: [
          "Manufacturing Plants",
          "Warehouses",
          "Distribution Centers",
          "Processing Facilities",
          "Industrial Workshops",
          "Storage Facilities",
          "Factories",
        ],
      },
      {
        title: "Why Choose MCC for Industrial Cleaning?",
        description:
          "Partnering with MCC Cleaning means choosing a dependable and experienced industrial cleaning service provider committed to excellence. Here's why industrial facilities trust us:",
        list_items: [
          "Skilled Staff: Our highly trained cleaning professionals understand the complexities of industrial environments.",
          "Safety Compliance: We adhere to strict safety protocols and industry regulations to ensure a safe cleaning process.",
          "Eco-Friendly Solutions: We use environmentally friendly cleaning products that are effective and safe for your facility.",
          "Tailored Plans: Our cleaning plans are customized to meet your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment to deliver superior results.",
          "24/7 Availability: Our services are available around the clock to accommodate your schedule and minimize downtime.",
        ],
      },
    ],
  },
  {
    route: "storage-cleaning",
    heading: "Storage Cleaning Services",
    subHeading: "Reliable Storage Cleaning for a Clean and Organized Space",
    description:
      "At MCC Cleaning, we understand the importance of keeping your storage facilities clean and well-organized. Our storage cleaning services are designed to maintain the cleanliness and efficiency of your storage spaces, ensuring a safe and accessible environment for all your needs.",
    details: [
      {
        title: "Tailored Cleaning Solutions for Storage Facilities",
        description:
          "Every storage facility has unique cleaning requirements. Whether you manage a self-storage unit, a warehouse, or a storage rental business, our storage cleaning services are tailored to meet your specific needs. We offer flexible scheduling and customizable cleaning plans to ensure your storage spaces remain in top condition. Our team is equipped to handle various types of storage facilities, including:",
        list_items: [
          "Self-Storage Units",
          "Warehouse Storage",
          "Storage Rental Businesses",
          "Commercial Storage Facilities",
          "Industrial Storage Spaces",
          "Residential Storage Areas",
          "Document Storage Facilities",
          "Climate-Controlled Storage Units",
        ],
      },
      {
        title: "Why Choose MCC for Storage Cleaning?",
        description:
          "Choosing MCC Cleaning means partnering with a trusted and experienced cleaning service provider dedicated to excellence. Here's why storage facilities rely on us:",
        list_items: [
          "Experienced Staff: Our professional cleaning team is trained to handle the unique challenges of storage facilities.",
          "Flexible Plans: Our cleaning plans are tailored to your specific needs and budget.",
          "Eco-Friendly Products: We use environmentally friendly cleaning products that are safe and effective.",
          "Tailored Plans: Our cleaning plans are customized to meet your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment to deliver superior results.",
          "24/7 Availability: Our services are available around the clock to fit your schedule and minimize disruption.",
          "Attention to Detail: We ensure every corner of your storage facility is thoroughly cleaned and maintained.",
        ],
      },
    ],
  },
  {
    route: "educational-cleaning",
    heading: "Educational Institute Cleaning Services",
    subHeading: "Expert Cleaning for a Safe and Healthy Learning Environment",
    description:
      "At MCC Cleaning, we know that a clean and hygienic educational environment is crucial for the health and success of students and staff. Our educational institute cleaning services are tailored to maintain the highest standards of cleanliness and sanitation, ensuring a safe and conducive learning atmosphere.",
    details: [
      {
        title: "Customized Cleaning Solutions for Educational Facilities",
        description:
          "Each educational institute has unique cleaning requirements. Whether you manage a small preschool, a large university, or a technical school, our cleaning services are designed to meet your specific needs. We offer flexible scheduling and customized cleaning plans to minimize disruption to your daily activities. Our team is equipped to handle various types of educational facilities, including:",
        list_items: [
          "Preschools",
          "Elementary Schools",
          "Middle Schools",
          "High Schools",
          "Colleges",
          "Universities",
          "Technical Schools",
          "Training Centers",
          "Daycare Centers",
          "After-School Programs",
        ],
      },
      {
        title: "Why Choose MCC for Educational Institute Cleaning?",
        description:
          "Choosing MCC Cleaning means partnering with a trusted and experienced cleaning service provider dedicated to excellence. Here's why storage facilities rely on us:",
        list_items: [
          "Experienced Staff: Our professional cleaning team is trained to handle the unique challenges of educational facilities.",
          "Safety Compliance: We adhere to strict safety protocols and industry regulations to ensure a safe cleaning process.",
          "Eco-Friendly Products: We use environmentally friendly cleaning products that are safe and effective.",
          "Customized Plans: Our cleaning plans are tailored to your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment to deliver superior results.",
          "24/7 Availability: Our services are available around the clock to fit your schedule and minimize disruption.",
          "Attention to Detail: We ensure every corner of your educational facility is thoroughly cleaned and maintained.",
        ],
      },
    ],
  },
  {
    route: "move-in-&-out-cleaning",
    heading: "Move-In/Move-Out Cleaning Services",
    subHeading: "Seamless Move-In and Move-Out Cleaning",
    description:
      "Moving can be a stressful and overwhelming experience, but MCC Cleaning is here to help make it easier. Our move-in and move-out cleaning services ensure that your transition is smooth and hassle-free, leaving your old or new home spotless and ready for the next step.",
    details: [
      {
        title: "Personalized Cleaning for Your Move",
        description:
          "Every move has its unique challenges, and we tailor our cleaning services to meet your specific needs. Whether you're moving into a new home or preparing one for new occupants, our flexible scheduling and thorough cleaning plans will make sure every detail is covered. Our services are perfect for:",
        list_items: [
          "Homes",
          "Apartments Stores",
          "Condos",
          "Rental Properties",
          "Real Estate Listings",
        ],
      },
      {
        title: "Why Choose MCC Cleaning for Move-In/Move-Out Cleaning?",
        description:
          "When you choose MCC Cleaning, you're choosing a trusted partner dedicated to making your move as smooth as possible. Here's why clients rely on us:",
        list_items: [
          "Experienced Staff: Our professional cleaning team is trained to handle the unique challenges of move-in and move-out cleaning.",
          "Flexible Plans: Our cleaning plans are tailored to your specific needs and budget.",
          "Eco-Friendly Products: We use environmentally friendly cleaning products that are safe and effective.",
          "Customized Plans: Our cleaning plans are customized to meet your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment to deliver superior results.",
          "24/7 Availability: Our services are available around the clock to fit your schedule and minimize disruption.",
          "Attention to Detail: We ensure every corner of your home is thoroughly cleaned and maintained.",
        ],
      },
    ],
  },
  {
    route: "disinfection-cleaning",
    heading: "Disinfection Services",
    subHeading:
      "Comprehensive Disinfection Services for a Healthier Environment",
    description:
      "At MCC Cleaning, we understand the importance of maintaining a clean and germ-free environment, especially in today’s world. Our professional disinfection services are designed to provide a thorough and effective clean, ensuring your space is safe and healthy for everyone.",
    details: [
      {
        title: "Tailored Disinfection Solutions for Your Needs",
        description:
          "Every space has unique disinfection requirements, and we tailor our services to meet those needs. Whether it's a small office, a large commercial building, or a residential property, our flexible scheduling and customized disinfection plans ensure comprehensive coverage. We cater to various types of spaces, including:",
        list_items: [
          "Offices",
          "Homes",
          "Schools",
          "Medical Facilities",
          "Retail Stores",
          "Warehouses",
          "Restaurants",
        ],
      },
      {
        title: "Why Choose MCC for Disinfection Services?",
        description:
          "Choosing MCC Cleaning means partnering with a reliable and experienced disinfection service provider committed to your safety. Here’s why clients trust us:",
        list_items: [
          "Experienced Staff: Our trained cleaning professionals are skilled in the latest disinfection techniques.",
          "Safety Compliance: We adhere to strict safety protocols and industry regulations to ensure a safe cleaning process.",
          "Eco-Friendly Products: We use environmentally friendly disinfectants that are safe and effective.",
          "Customized Plans: Our disinfection plans are tailored to your specific needs and budget.",
          "Advanced Equipment: We utilize the latest disinfection technology and equipment to deliver superior results.",
          "24/7 Availability: Our services are available around the clock to fit your schedule and minimize disruption.",
          "Attention to Detail: We ensure every surface is thoroughly disinfected and sanitized.",
        ],
      },
    ],
  },
  {
    route: "hospital-cleaning",
    heading: "Hospital Cleaning Services",
    subHeading:
      "Professional Hospital Cleaning for a Safe and Sterile Environment",
    description:
      "At MCC Cleaning, we understand the critical importance of maintaining a clean and sterile environment in healthcare facilities. Our hospital cleaning services are designed to meet the highest standards of cleanliness and hygiene, ensuring the safety and well-being of patients, staff, and visitors.",
    details: [
      {
        title: "Tailored Cleaning Solutions for Healthcare Facilities",
        description:
          "Every healthcare facility has unique cleaning requirements. Whether you manage a small clinic, a large hospital, or a specialized medical center, our cleaning services are customized to meet your specific needs. We offer flexible scheduling and specialized cleaning plans to ensure minimal disruption to your operations. Our team is equipped to handle various healthcare settings, including:",
        list_items: [
          "Hospitals",
          "Clinics",
          "Medical Offices",
          "Dental Offices",
          "Urgent Care Centers",
          "Surgical Centers",
          "Rehabilitation Centers",
          "Nursing Homes",
          "Assisted Living Facilities",
        ],
      },
      {
        title: "Why Choose MCC for Hospital Cleaning?",
        description:
          "Choosing MCC Cleaning means partnering with a reliable and experienced cleaning service provider dedicated to the highest standards of hygiene. Here's why healthcare facilities trust us:",
        list_items: [
          "Trained Staff: Our professional cleaning team is trained to handle the unique challenges of healthcare environments.",
          "Safety Compliance: We adhere to strict safety protocols and industry regulations to ensure a safe and compliant cleaning process.",
          "Eco-Friendly Products: We use EPA-approved and environmentally friendly disinfectants that are safe for patients and staff.",
          "Customized Plans: Our cleaning plans are tailored to meet your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment for superior results.",
          "24/7 Availability: Our services are available around the clock to fit your schedule and minimize disruption.",
        ],
      },
    ],
  },
  {
    route: "post-construction-cleaning",
    heading: "Post-Construction Cleaning Services",
    subHeading: "Expert Post-Construction Cleaning for a Pristine Finish",
    description:
      "At MCC Cleaning, we know that the completion of a construction project leaves behind a significant amount of dust, debris, and construction residue. Our post-construction cleaning services are designed to provide a thorough and detailed clean, ensuring your new space is spotless and ready for use.",
    details: [
      {
        title: "Customized Cleaning Solutions for Construction Projects",
        description:
          "Every construction project is unique, and so are the cleaning needs that follow. Whether you’ve completed a renovation, new build, or remodeling project, our post-construction cleaning services are tailored to meet your specific requirements. We offer flexible scheduling and comprehensive cleaning plans to ensure your space is in perfect condition. Our team is equipped to handle various types of construction sites, including:",
        list_items: [
          "Residential Homes",
          "Commercial Buildings",
          "Office Spaces",
          "Retail Stores",
          "Restaurants",
          "Warehouses",
          "Medical Facilities",
          "Educational Institutions",
        ],
      },
      {
        title: "Why Choose MCC for Post-Construction Cleaning?",
        description:
          "Choosing MCC Cleaning means partnering with a reliable and experienced cleaning service provider dedicated to delivering exceptional results. Here's why clients trust us:",
        list_items: [
          "Skilled Staff: Our professional cleaning team is trained to handle the specific challenges of post-construction cleaning.",
          "Attention to Detail: We ensure every inch of your space is thoroughly cleaned and inspected.",
          "Eco-Friendly Products: We use environmentally friendly cleaning products that are safe and effective.",
          "Customized Plans: Our cleaning plans are tailored to meet your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment for superior results.",
          "Flexible Scheduling: Our services are available at your convenience to fit your project timeline.",
        ],
      },
    ],
  },
  {
    route: "janitorial-cleaning",
    heading: "Janitorial Services",
    subHeading:
      "Professional Janitorial Services for a Clean and Healthy Environment",
    description:
      "At MCC Cleaning, we understand that maintaining a clean and organized environment is essential for the well-being and productivity of your employees and visitors. Our professional janitorial services are designed to keep your facility spotless and running smoothly, providing a welcoming and healthy atmosphere.",
    details: [
      {
        title: "Tailored Janitorial Solutions for Your Facility",
        description:
          "Every facility has unique cleaning needs. Whether you manage an office building, a school, or a retail store, our janitorial services are customized to meet your specific requirements. We offer flexible scheduling and comprehensive cleaning plans to ensure your space is always at its best. Our team is equipped to handle various types of facilities, including:",
        list_items: [
          "Office Buildings",
          "Retail Stores",
          "Schools",
          "Medical Facilities",
          "Restaurants",
          "Warehouses",
          "Manufacturing Plants",
          "Fitness Centers",
          "Government Buildings",
        ],
      },
      {
        title: "Why Choose MCC for Janitorial Services?",
        description:
          "Choosing MCC Cleaning means partnering with a reliable and experienced janitorial service provider dedicated to your satisfaction. Here's why clients trust us:",
        list_items: [
          "Experienced Staff: Our professional cleaning team is trained to deliver high-quality service.",
          "Safety Compliance: We adhere to strict safety protocols and industry regulations to ensure a safe cleaning process.",
          "Eco-Friendly Products: We use environmentally friendly cleaning products that are safe for your facility.",
          "Customized Plans: Our cleaning plans are tailored to meet your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment for superior results.",
          "24/7 Availability: Our services are available around the clock to fit your schedule and minimize disruption.",
        ],
      },
    ],
  },
  {
    route: "window-cleaning",
    heading: "Window Cleaning Services",
    subHeading: "Sparkling Clean Windows for a Brighter Space",
    description:
      "At MCC Cleaning, we understand that clean windows can make a significant difference in the appearance of your property. Our professional window cleaning services are designed to provide a clear, streak-free shine, enhancing the overall look and feel of your space.",
    details: [
      {
        title: "Customized Window Cleaning Solutions",
        description:
          "Every property has unique window cleaning needs. Whether you manage a residential home, a commercial building, or an industrial facility, our window cleaning services are tailored to meet your specific requirements. We offer flexible scheduling and detailed cleaning plans to ensure your windows are always spotless. Our team is equipped to handle various types of properties, including:",
        list_items: [
          "Residential Homes",
          "Commercial Buildings",
          "Office Spaces",
          "Retail Stores",
          "Restaurants",
          "High-Rise Buildings",
          "Industrial Facilities",
          "Educational Institutions",
        ],
      },
      {
        title: "Why Choose MCC for Window Cleaning?",
        description:
          "Choosing MCC Cleaning means partnering with a trusted and experienced window cleaning service provider committed to delivering exceptional results. Here's why clients trust us:",
        list_items: [
          "Skilled Technicians: Our professional window cleaning team is trained to handle windows of all shapes, sizes, and heights.",
          "Attention to Detail: We ensure every window is thoroughly cleaned and inspected for a flawless finish.",
          "Eco-Friendly Products: We use environmentally friendly cleaning solutions that are safe for your property and the environment.",
          "Customized Plans: Our window cleaning plans are tailored to meet your specific needs and budget",
        ],
      },
    ],
  },
  {
    route: "office-cleaning",
    heading: "Office Cleaning Services Near Me",
    subHeading: "Expert Office Cleaning for a Productive Workspace",
    description:
      "At Master Class Commercial Cleaning, we know that a clean office is more than just a nice-to-have—it’s a necessity for a productive and professional work environment. Our specialized office cleaning services are designed to keep your workspace immaculate, fostering a healthy atmosphere for your employees and making a great impression on clients.",
    details: [
      {
        title: "Customized Office Cleaning Solutions",
        description:
          "We understand that every office has its unique cleaning requirements. Whether you manage a small business or a large corporate office, our cleaning services are customized to meet your specific needs. We offer flexible scheduling and tailored cleaning plans that minimize disruption to your operations. Our team is experienced in maintaining a variety of office spaces, including:",
        list_items: [
          "Corporate Offices",
          "Open-Plan Offices",
          "Startups",
          "Co-Working Spaces",
          "Shared Offices",
          "Break Rooms",
          "Executive Suites",
          "Reception Areas",
          "Medical Offices",
          "Dental Offices",
          "Restrooms",
        ],
      },
      {
        title: "Why Choose Master Class Commercial Cleaning?",
        description:
          "When you choose Master Class Commercial Cleaning, you're choosing a partner dedicated to maintaining the cleanliness and professionalism of your office space. Here’s why businesses in your area trust us:",
        list_items: [
          "Experienced Office Cleaning Staff: Our team is trained to handle the unique challenges of office cleaning, ensuring thorough and consistent results.",
          "Safe and Eco-Friendly Products: We use environmentally friendly cleaning products that protect the health of your employees and the environment.",
          "Flexible Cleaning Plans: Our services are tailored to fit your office’s specific cleaning needs and budget, with options for daily, weekly, or monthly cleaning.",
          "State-of-the-Art Equipment: We utilize the latest cleaning technology to ensure your office is spotless.",
          "Around-the-Clock Service: We offer 24/7 availability to accommodate your business hours and ensure minimal disruption.",
        ],
      },
    ],
  },
  {
    route: "airbnb-cleaning",
    heading: "Airbnb Cleaning Services",
    subHeading: "Exceptional Cleaning for Your Airbnb Property",
    description:
      "At MCC Cleaning, we understand that maintaining a clean and welcoming environment is crucial for the success of your Airbnb rental. Our professional Airbnb cleaning services are designed to ensure your property is spotless and ready for every guest, enhancing their experience and earning you positive reviews.",
    details: [
      {
        title: "Customized Cleaning Solutions for Airbnb Hosts",
        description:
          "Every Airbnb property is unique, and so are its cleaning needs. Whether you manage a single rental or multiple properties, our cleaning services are tailored to meet your specific requirements. We offer flexible scheduling and detailed cleaning plans to ensure your property is always in top condition. Our team is equipped to handle various types of Airbnb properties, including:",
        list_items: [
          "Single Rentals",
          "Multiple Properties",
          "Vacation Homes",
          "Apartments",
          "Condos",
          "Guest Houses",
          "Cottages",
          "Cabins",
          "Townhouses",
          "Luxury Rentals",
        ],
      },
      {
        title: "Why Choose MCC for Airbnb Cleaning?",
        description:
          "Choosing MCC Cleaning means partnering with a reliable and experienced cleaning service provider dedicated to your satisfaction and the comfort of your guests. Here's why Airbnb hosts trust us:",
        list_items: [
          "Professional Staff: Our trained cleaning team is skilled in preparing properties for new guests.",
          "Attention to Detail: We ensure every corner of your property is thoroughly cleaned and inspected.",
          "Eco-Friendly Products: We use environmentally friendly cleaning products that are safe for your property and guests.",
          "Customized Plans: Our cleaning plans are tailored to meet your specific needs and budget.",
          "Advanced Equipment: We utilize the latest cleaning technology and equipment for superior results.",
          "Flexible Scheduling: Our services are available at your convenience to fit your booking schedule.",
        ],
      },
    ],
  },
];

export const trusted_affordable_data = [
  {
    image: "/images/cleaning-service-images/card-4.svg",
    title: "Affordable and Secure",
    description: [
      "Change of mind? Hesitant about paying online? Scared of hidden fees? Don't worry about any of that with us. We're not just clean with our job but also with our transactions. You can cancel your appointment with us anytime, free of charge.",
      "Lastly, we provide you with the actual cost of our cleaning services. You'll pay us exactly what you see on your booking screen. We're not a huge fan of surprises, except when it's about surprising you with the quality of our work.",
    ],
  },
  {
    image: "/images/cleaning-service-images/card-5.svg",
    title: "Trusted and Flexible",
    description: [
      "Our eco-friendly, green cleaning method has benefited countless offices and our environment for over a decade. We understand the value of each second when you're running a company. Businesses can earn thousands of dollars with each passing minute, and we don't want you to compromise that. You're a professional at what you do, and so are we.",
      "That's why we work around your schedule and ensure that our team of efficient cleaners arrives at your facility when you're not using it. How do you like leaving a messy office and returning to it completely spotless?",
      "We also offer condo & house cleaning, move-in or move-out cleaning, AirBnB cleaning, and post-construction cleaning.",
    ],
  },
  {
    image: "/images/cleaning-service-images/card-6.svg",
    title: "Special Request",
    description: [
      "Aside from general janitorial services like carpet cleaning or dusting surfaces, our service includes several specialized cleaning and maintenance techniques for every area in your facility. You can also contact us if you want to use our deep-cleaning or janitorial services regularly. We offer commercial cleaning services weekly, bi-weekly, tri-weekly, and monthly. If you're hesitant about us yet, no hard feelings! There's always the one-time cleaning option to let you gauge the quality of our work first.",
    ],
  },
  {
    image: "/images/cleaning-service-images/card-7.svg",
    title: "Convenient",
    description: [
      "It's also effortless to book our cleaning services. You just have to provide us with basic information about you, your company, the service you want to avail of, and the date and time you want us to be there. You can do all of these in just a minute!",
      "On the other hand, if you have very specific requests or inquiries about our cleaning services, you can call us via phone. Our customer service representatives are always ready to answer your questions and provide you with the information you need.",
    ],
  },
];
