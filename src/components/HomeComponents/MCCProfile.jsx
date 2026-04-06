import { contactNumber, emailAddress } from "../../components/Misc/GetAQuote";
import Years from "../Misc/Years";

const MCCProfile = () => {
  return (
    <section className="contact-profile-years max-w-[900px] w-full flex flex-col-reverse md:flex-row justify-between items-center mt-2 mb-6">
      <div className="space-y-4">
        <p className="flex justify-start items-center gap-1 text-xs md:text-2xl">
          <img
            className="w-7 h-7 md:w-auto md:h-auto mr-2"
            src={"/images/pdf.webp"}
            alt="profile"
          />
          Download our company
          <a href={"/docs/mcc-profile.pdf"}>profile</a>
        </p>
        <p className="flex justify-start items-center gap-1 text-xs md:text-2xl">
          <img
            className="w-7 h-7 md:w-auto md:h-auto mr-2"
            src={"/images/email.webp"}
            alt="email"
          />
          <a href={"mailto:" + emailAddress}>Email</a>
          us or call us now
          <a href={"tel:" + contactNumber}>{contactNumber}</a>
        </p>
      </div>
      <Years className={"max-w-48"} fontSize={"mr-2 mb-4 text-[6rem]"} />
    </section>
  );
};

export default MCCProfile;
