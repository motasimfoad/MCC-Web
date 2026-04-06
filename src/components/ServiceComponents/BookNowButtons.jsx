/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ArrowCircleRight, CalendarMonth, Phone } from "@mui/icons-material";
import { contactNumber } from "../Misc/GetAQuote";

const BookNowButtons = ({ ribbon, className }) => {
  return (
    <section
      className={`${ribbon && "my-12 py-8 px-4 text-white bg-[#6578c1]/70"}`}
    >
      <div className={`${className}`}>
        <a
          className="flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-white hover:bg-white/70 text-black"
          href="#form"
        >
          <CalendarMonth fontSize="medium" />
          <p>BOOK IN 60 SECONDS</p>
        </a>
        <Link
          className="flex justify-center items-center gap-2 py-2 px-4 rounded-md border-2 hover:text-[#6578c1]"
          to={"tel:" + contactNumber}
        >
          <Phone fontSize="medium" />
          <p>CALL NOW</p>
        </Link>
        <Link
          className="flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-[#6578c1] hover:bg-[#4f5d97]"
          to="/contact"
        >
          <p>GET A QUOTE</p> <ArrowCircleRight fontSize="medium" />
        </Link>
      </div>
    </section>
  );
};

export default BookNowButtons;
