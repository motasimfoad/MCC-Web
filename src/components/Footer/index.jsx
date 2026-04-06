import { Link } from "react-router-dom";
import Brand from "../Header/Brand";
import Socials from "./Socials";
import { contactNumber, emailAddress } from "../Misc/GetAQuote";
import ContactBtn from "./ContactBtn";
import CopyRights from "./CopyRights";
import FooterRoutes from "./FooterRoutes";

const Footer = () => {
  return (
    <footer className="px-2 bg-[#6578c1] text-white">
      <section className="flex flex-col justify-center items-center gap-4 pt-6 md:pt-8 text-center">
        <Brand className="w-48 md:w-64 p-2 md:p-4 rounded-md md:rounded-lg shadow-xl bg-white" />
        <FooterRoutes />
        <p className="max-w-[900px] font-sans text-sm/6">
          MasterClass Commercial cleaning services in Ontario keep businesses
          spotless with professional cleaning for offices, retail spaces, and
          more. From daily tasks like dusting and sanitizing to specialized
          services, with our eco-friendly products and flexible schedules to
          ensure a clean, healthy workspace without disrupting operations.
        </p>
        <Socials />
        <p className="text-sm">
          Find out more: Email us{" "}
          <Link className="hover:text-[#FE8F00]" to={`mailto:${emailAddress}`}>
            {emailAddress}
          </Link>
          {", "} or give us a call{" "}
          <Link className="hover:text-[#FE8F00]" to={`tel:${contactNumber}`}>
            {contactNumber}
          </Link>
          .
        </p>
        <ContactBtn />
      </section>
      <CopyRights />
    </footer>
  );
};

export default Footer;
