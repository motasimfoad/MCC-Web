import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@mui/icons-material";
import Years from "./Years";

export const contactNumber = "(905) 632-0559";
export const emailAddress = "office@mccommercialcleaning.com";

const GetAQuote = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-[#6578c1]">
          How can I find out more?
        </h4>
        <p>
          Email us:{" "}
          <Link className="hover:text-[#6578c1]" to={`mailto:${emailAddress}`}>
            {emailAddress}
          </Link>
        </p>
        <p>
          Give us a call:{" "}
          <Link className="hover:text-[#6578c1]" to={"tel:" + contactNumber}>
            {contactNumber}
          </Link>
        </p>
        <Link to={"/contact"}>
          <p className="py-2 rounded-md bg-[#6578c1] hover:bg-[#6578c1]/80 text-center md:text-xl text-white">
            Get a quote <ArrowCircleRight />
          </p>
        </Link>
      </div>
      <Years />
    </section>
  );
};

export default GetAQuote;
