/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const Head = ({ icon, title, description, keywords, image, url, card }) => {
  return (
    <Helmet>
      <link rel="icon" href={icon || "/images/favicon.ico"} />
      <title>{`${title} | Master Class Commercial Cleaning`}</title>
      <link rel="canonical" href={url || "https://mccommercialcleaning.com/"} />
      {/* Professional Cleaning Services for Businesses in Canada */}
      {/* Meta Title Tags */}
      <meta
        name="title"
        content={`${title} | Master Class Commercial Cleaning`}
        key="title"
      />
      <meta
        property="og:title"
        content={`${title} | Master Class Commercial Cleaning`}
        key="title"
      />
      <meta
        name="twitter:title"
        content={`${title} | Master Class Commercial Cleaning`}
        key="title"
      />
      {/* Meta Image Tags */}
      <meta
        name="image"
        content={image || "/images/cleaning-service-images/image-4.jpg"}
        key="image"
      />
      <meta
        property="og:image"
        content={image || "/images/cleaning-service-images/image-4.jpg"}
        key="image"
      />
      <meta
        name="twitter:image"
        content={image || "/images/cleaning-service-images/image-4.jpg"}
        key="image"
      />
      {/* Meta URL Tags */}
      <meta
        name="url"
        content={url || "https://mccommercialcleaning.com/"}
        key="url"
      />
      <meta
        property="og:url"
        content={url || "https://mccommercialcleaning.com/"}
        key="url"
      />
      {/* Meta Description Tags */}
      <meta
        name="description"
        content={
          description ||
          "Best commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
        }
        key="description"
      />
      <meta
        property="og:description"
        content={
          description ||
          "Best commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
        }
        key="description"
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Best commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
        }
        key="description"
      />
      {/* Meta Keywords Tags */}
      <meta
        name="keywords"
        content={
          keywords ||
          "Commercial cleaning toronto, MCC Cleaning, MCC Commercial Cleaning Locations, Commercial Cleaning Services, MCC Commercial Cleaning in Toronto, Industrial Cleaning Services, Storage Cleaning Services, Educational Institute Clean, Move in Move Out Cleaning Services, Disinfection Services, Hospital Clinic Cleaning Services, Post Construction Cleaning Services, Janitorial Services, Window Cleaning Services, Airbnb Cleaning Services,"
        }
        key="keywords"
      />
      {/* Meta Twitter Tags */}
      <meta
        name="twitter:card"
        content={card || "summary_large_image"}
        key="card"
      />
    </Helmet>
  );
};

export default Head;
