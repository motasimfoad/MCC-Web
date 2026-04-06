import { ArrowCircleRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const MCCAboutUs = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  const year = (fullYear % 100) - 8;
  return (
    <section className="max-w-[900px] flex flex-col md:flex-row px-2 md:space-x-4">
      <div className="w-full">
        <h4 className="mt-2 mb-1 text-lg md:text-xl font-bold text-[#6578c1]">
          Who are we?
        </h4>
        <p className="text-sm">
          Master Class Commercial Cleaning, a Canadian-owned company with over
          {" " + year} years of expertise, specializes in delivering top-tier
          services, including commercial and office cleaning. We prioritize the
          well-being of individuals, going the extra mile to guarantee that your
          office fosters a safe, clean, and pleasant environment conducive to
          people&apos;s growth and success.
        </p>
        <h4 className="mt-2 mb-1 text-lg md:text-xl font-bold text-[#6578c1]">
          Our Values
        </h4>
        <p className="text-sm">
          Our work is guided by our core values of respect, responsibility,
          integrity, excellence in cleaning, and continuous innovation, enabling
          us to establish enduring and successful partnerships with clients
          nationally.
        </p>
        <h4 className="mt-2 mb-1 text-lg md:text-xl font-bold text-[#6578c1]">
          Our Commitment
        </h4>
        <p className="text-sm">
          Our dedication to excellence in both commercial and office cleaning
          has enabled us to attain and uphold the utmost accreditation
          certifications for our services. This commitment drives innovation,
          environmental stewardship, and resource optimization across various
          sectors and industries.
        </p>
      </div>
      <div className="section-b w-full space-y-4">
        <h4 className="mt-2 mb-1 text-lg md:text-xl font-bold text-[#6578c1]">
          Our approach
        </h4>
        <p className="text-sm">
          At Master Class Commercial Cleaning, we believe in offering more than
          just a one-size-fits-all approach to our services. Instead, we provide
          an operational excellence model, delivering a structured and tailored
          cleaning solution to mitigate risks and ensure consistent quality.
        </p>
        <p className="text-sm">
          Furthermore, our facility optimization management methods enable us to
          utilize data-driven decisions for predictive maintenance and real-time
          localization, resulting in increased efficiency and superior cleaning
          results.
        </p>
        <p className="text-sm">
          If you&apos;re prepared to experience the positive impact Master Class
          Commercial Cleaning can bring to your business, we&apos;re prepared to
          make it a reality.
        </p>
        <p className="text-sm">
          Contact us today to find out more, and read some of our client
          testimonials to find out what people are saying about us!
        </p>
        <Link to={"/contact"}>
          <p className="py-1 rounded-md bg-[#6578c1] hover:bg-[#6578c1]/80 text-center text-white">
            CONTACT US TODAY <ArrowCircleRight />
          </p>
        </Link>
      </div>
    </section>
  );
};

export default MCCAboutUs;
