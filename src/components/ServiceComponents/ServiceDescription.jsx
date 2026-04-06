/* eslint-disable react/prop-types */
import React from "react";

const ServiceDescription = ({ details, image, reverse }) => {
  const [fetchedDetails, setFetchedDetails] = React.useState({});
  const { title, description, list_items } = fetchedDetails;

  React.useEffect(() => {
    setFetchedDetails(details);
  }, [details]);

  return (
    <section
      className={`max-w-[900px] md:flex ${
        reverse && "flex-row-reverse"
      } justify-between gap-4 my-12 mx-auto px-2 space-y-4 md:space-y-0`}
    >
      <div className="w-full space-y-4">
        <h3 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          {title}
        </h3>
        <p>{description}</p>
        <ul className="list-disc pl-5 space-y-2">
          {list_items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <img className="h-full object-cover rounded-xl shadow-lg" src={image} />
      </div>
    </section>
  );
};

export default ServiceDescription;
