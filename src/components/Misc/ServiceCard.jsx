/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({ cardData }) => {
  return (
    <div className="max-w-40 md:max-w-64 h-56 flex flex-col grow justify-between items-center p-4 rounded-lg shadow-lg hover:shadow-2xl bg-white text-[#6578c1] duration-300">
      <div className="mt-6 mb-4">{cardData.icon}</div>
      <h2 className="w-full text-center md:text-xl font-semibold text-[#6578c1]">
        {cardData.title}
      </h2>
      <Link
        className="w-full py-2 rounded-md text-center text-sm tracking-wider font-semibold text-white bg-[#6578c1]"
        to={`/cleaning-services${cardData.route}`}
      >
        View
      </Link>
    </div>
  );
};

export default ServiceCard;
