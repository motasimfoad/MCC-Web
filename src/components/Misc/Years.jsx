/* eslint-disable react/prop-types */
import { Image } from "@geist-ui/core";

const Years = ({ className, fontSize }) => {
  const date = new Date();
  const fullYear = date.getFullYear();
  const year = (fullYear % 100) - 8;

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <Image
        style={{ width: "100%", maxWidth: "240px" }}
        src="/images/16-years-new.webp"
        alt="MCC"
      />
      <p
        className={`absolute font-serif font-black ${
          fontSize || "mr-2 mb-5 text-[7.6rem]"
        } text-[#3755a7]`}
      >
        {year}
      </p>
    </div>
  );
};

export default Years;
