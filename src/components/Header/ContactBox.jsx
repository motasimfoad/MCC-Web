import React from "react";
import { Link } from "react-router-dom";
import { contactNumber } from "../Misc/GetAQuote";

const ContactBox = () => {
  const [open, setOPen] = React.useState(false);
  const toggle = () => setOPen(!open);

  return (
    <div className="w-full md:max-w-80 flex flex-col items-center p-2 space-y-1 text-center bg-black/80 text-white md:z-[1]">
      <Link
        className="w-full py-1 rounded-md bg-[#6578c1] hover:bg-[#6578c1]/80"
        to={"/faqs"}
      >
        Frequently Asked Questions
      </Link>
      <span
        className={
          open
            ? "h-8 duration-200"
            : "h-0 opacity-0 duration-200 overflow-hidden"
        }
      >
        <Link
          className="font-mono text-2xl hover:text-[#6578c1]"
          to={`tel:${contactNumber}`}
        >
          {contactNumber}
        </Link>
      </span>
      <div className="w-full flex gap-1">
        <button
          className="w-full py-1 rounded-md bg-[#6578c1] hover:bg-[#6578c1]/80"
          onClick={toggle}
          type="button"
        >
          Phone
        </button>
        <Link
          className="w-full py-1 rounded-md bg-[#6578c1] hover:bg-[#6578c1]/80"
          to="/contact"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
};

export default ContactBox;
