/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router";
import {
  defaultDetails,
  service_description_data,
} from "../../../constants/service_page_data";
import Head from "../../../components/Misc/Head";
import HeroSection from "../../../components/ServiceComponents/HeroSection";
import LoyaltyCards from "../../../components/ServiceComponents/LoyaltyCards";
import ServiceDescription from "../../../components/ServiceComponents/ServiceDescription";
import ServiceComponents from "../../../components/ServiceComponents";
import BookNowButtons from "../../../components/ServiceComponents/BookNowButtons";
import NewForm from "../../../components/Form";
import GetAQuote from "../../../components/Misc/GetAQuote";
import ErrorPage from "../../../components/ErrorPage";

const CleaningService = () => {
  const { services } = useParams();
  const [filteredData, setFilteredData] = React.useState({});
  const [fetchedDetails, setFetchedDetails] = React.useState([]);

  React.useEffect(() => {
    const filterData = service_description_data.find(
      (data) => data?.route === services
    );
    setFilteredData(filterData);
    setFetchedDetails(filteredData?.details);
  }, [services, filteredData?.details]);

  if (!filteredData) return <ErrorPage />;

  return (
    <main>
      <Head
        title={filteredData.heading || "Service Page"}
        description={filteredData.description || "Service Description"}
        url={`http://mccommercialcleaning.com/cleaning-services/${
          filteredData.route || ""
        }`}
      />
      <HeroSection
        heading={filteredData.heading}
        subHeading={filteredData.subHeading}
        description={filteredData.description}
      />
      <LoyaltyCards />
      {fetchedDetails?.map((details, index) => (
        <ServiceDescription
          details={details}
          reverse={index % 2 === 1}
          key={index}
          image={`/images/cleaning-service-images/image-${index + 2}.webp`}
        />
      ))}
      <ServiceDescription
        details={defaultDetails}
        image={`/images/cleaning-service-images/image-4.webp`}
      />
      <BookNowButtons
        className="max-w-[900px] flex flex-col md:flex-row justify-between gap-4 mx-auto"
        ribbon
      />
      <ServiceComponents />
      <section className="max-w-[900px] my-12 mx-auto px-2">
        <NewForm />
        <GetAQuote />
      </section>
    </main>
  );
};

export default CleaningService;
