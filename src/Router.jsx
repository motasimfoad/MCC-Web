/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProgressBar from "./components/ProgressBar";
import App from "./App";

// Page Route Components
import Home from "./pages/Home";
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const WhyChooseUs = React.lazy(() => import("./pages/WhyChooseUs"));
const Locations = React.lazy(() => import("./pages/Locations"));
const SubmissionSucessful = React.lazy(() =>
  import("./pages/SubmissionSucessful")
);
const CleaningServices = React.lazy(() => import("./pages/CleaningServices"));
const SurfaceDisinfection = React.lazy(() =>
  import("./pages/SurfaceDisinfection")
);
const HowWeWork = React.lazy(() => import("./pages/HowWeWork"));
const WhatOurClientSay = React.lazy(() => import("./pages/WhatOurClientSay"));
const EnvironmentallyResponsible = React.lazy(() =>
  import("./pages/EnvironmentallyResponsible")
);
const FAQs = React.lazy(() => import("./pages/FAQs"));
// Card To Page Route Components
const CommercialCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/CommercialCleaning")
);
const IndustrialCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/IndustrialCleaning")
);
const StorageCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/StorageCleaning")
);
const EducationalCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/EducationalCleaning")
);
const MoveInOutCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/MoveInOutCleaning")
);
const DisinfectionCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/DisinfectionCleaning")
);
const HospitalCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/HospitalCleaning")
);
const PostConstructionCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/PostConstructionCleaning")
);
const JanitorialCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/JanitorialCleaning")
);
const WindowCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/WindowCleaning")
);
const AirbnbCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/AirbnbCleaning")
);
const OfficeCleaning = React.lazy(() =>
  import("./pages/cleaning-service-pages/OfficeCleaning")
);
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home
            title="Professional Cleaning Services for Businesses in Canada"
            description="Best commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
            canonicalUrl="http://mccommercialcleaning.com/"
          />
        ),
      },
      {
        path: "/about",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <AboutUs
              title="About MCC Cleaning | Expert Cleaners in Toronto"
              description="Next generation cleaning services and maid services provider in toronto. Discover more about MCC cleaning Contact us today. commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
              canonicalUrl="http://mccommercialcleaning.com/about"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <ContactUs
              title="Contact Us | MCC Cleaning in Toronto"
              description="Get in touch with MCC Cleaning for top-notch services in Toronto. Request a quote or inquire about our cleaning solutions today."
              canonicalUrl="http://mccommercialcleaning.com/contact"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/locations",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <Locations
              title="MCC Cleaning Locations: Serving Top Toronto Areas"
              description="MCC Cleaning: Serving businesses across Toronto. Find your location for tailored commercial cleaning services. Contact us!"
              canonicalUrl="http://mccommercialcleaning.com/locations"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/surface-disinfection",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <SurfaceDisinfection
              title="Surface Disinfection"
              description="Master Class Commercial Cleaning is providing Disinfection Services throughout Burlington, Hamilton, Oakville, Mississauga, Brampton, Toronto & GTA"
              canonicalUrl="http://mccommercialcleaning.com/surface-disinfection"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <CleaningServices
              title="Commercial Cleaning Services in Toronto"
              description="Discover MCC Cleaning's services in Toronto: office cleaning, sanitation, and more. Custom solutions for a clean, safe business environment."
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/commercial-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <CommercialCleaning
              title="Top Commercial Cleaning Services in Canada"
              description="Expert Commercial Cleaning Services across Canada. Tailored solutions for offices & industries in Burlington, Hamilton & more. Contact for a quote"
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/commercial-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/industrial-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <IndustrialCleaning
              title="Professional Industrial Cleaning Services | Industy Machine cleaning"
              description="Maximize industrial cleanliness with Master Class Canada’s services for factories & warehouses in Burlington, Hamilton, Oakville, GTA. Custom quotes available."
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/industrial-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/storage-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <StorageCleaning
              title="Storage Cleaning Services"
              description="Maintain neat & clean storage by Master Class Commercial Cleanings specialized Storage Cleaning Services. We are serving Burlington, Hamilton, Oakville, Mississauga, Toronto, Brampton & GTA"
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/storage-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/educational-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <EducationalCleaning
              title="School Library College University Cleaning Service | Educational Institutional Cleaning"
              description="We provide schools, colleges, universities, libraries, and daycare cleaning service throughout Burlington, Hamilton, Oakville, Mississauga, Toronto, Brampton & GTA"
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/educational-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/move-in-&-out-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <MoveInOutCleaning
              title="House Move In Cleaning | Move in Move Out Cleaning Services"
              description="While you take care of house move-in or move-out, our team of expert cleaners will make sure your new place is neat and clean before you enter. Reach us for your free estimate. Burlington, Hamilton, Oakville, Mississauga, Toronto, Brampton, GTA"
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/move-in-&-out-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/disinfection-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <DisinfectionCleaning
              title="Disinfection Services"
              description="Master Class Commercial Cleaning is providing Disinfection Services throughout Burlington, Hamilton, Oakville, Mississauga, Brampton, Toronto & GTA"
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/disinfection-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/hospital-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <HospitalCleaning
              title="Dental Hospital Clinic Cleaning Services"
              description="Looking for Dental Hospital Clinic Cleaning Services in Burlington, Hamilton, Oakville, Mississauga, Toronto, Brampton & GTA? Reach Master Class Commercial Cleaning for your free estimate."
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/hospital-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/post-construction-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <PostConstructionCleaning
              title="Post Construction Cleaning Services"
              description="Master Class Commercial Cleaning is the best Post Construction Cleaning Services provider in Burlington, Hamilton, Oakville, Mississauga, Toronto, Brampton & GTA. Reach us for your free estimate. "
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/post-construction-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/janitorial-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <JanitorialCleaning
              title="Janitorial Cleaning Services"
              description="Looking for the best Janitorial Cleaning Services around Burlington, Hamilton, Oakville, Mississauga, Toronto, Brampton & GTA? Master Class Commercial Cleaning has you covered."
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/janitorial-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/window-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <WindowCleaning
              title="High Rise Window Cleaning Service | Building Window cleaning solution"
              description="Looking for a high-rise window cleaning service throughout Burlington, Hamilton, Oakville, Mississauga, Toronto, Brampton & GTA? Master Class Commercial Cleaning provides best-in-class window cleaning services. "
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/window-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/airbnb-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <AirbnbCleaning
              title="Trusted Airbnb Cleaning Services Across Canada"
              description="Experience peace of mind with the best Airbnb cleaning service provider in Canada. Our dedicated team ensures impeccable cleanliness, allowing you to host with confidence and provide an exceptional guest experience."
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/airbnb-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/cleaning-services/office-cleaning",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <OfficeCleaning
              title="Professional Office Cleaning Services Near Me | Master Class Commercial Cleaning"
              description="Looking for top-rated office cleaning services near you? Master Class Commercial Cleaning offers reliable, eco-friendly solutions to keep your workspace spotless and productive. Book your service today!"
              canonicalUrl="http://mccommercialcleaning.com/cleaning-services/office-cleaning"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/why-choose-us",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <WhyChooseUs
              title="Why Choose Us"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/why-choose-us"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/environmentally-responsible",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <EnvironmentallyResponsible
              title="Environmentally Responsible"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/environmentally-responsible"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/how-we-work",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <HowWeWork
              title="How We Work"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/how-we-work"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/what-our-clients-say",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <WhatOurClientSay
              title="What Our Client Say"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/what-our-clients-say"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/faqs",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <FAQs
              title="Frequently Asked Questions"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/faqs"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <PrivacyPolicy
              title="Privacy Policy"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/privacy-policy"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/submission-sucessful",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <SubmissionSucessful
              title="Submission Sucessful"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/submission-sucessful"
            />
          </React.Suspense>
        ),
      },
      {
        path: "/websiteformthankyou",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <SubmissionSucessful
              title="Submission Sucessful"
              description=""
              canonicalUrl="http://mccommercialcleaning.com/submission-sucessful"
            />
          </React.Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <React.Suspense fallback={<ProgressBar />}>
            <ErrorPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);
