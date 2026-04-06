/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import GetAQuote from "../../components/Misc/GetAQuote";

const WhyChooseUs = ({ title, description, canonicalUrl }) => {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          Why Choose Us
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/why-us.webp)]"
          title={"Because we&apos;ve been there and done it"}
          position="bg-bottom"
        />
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Master Class Commercial Cleaning offers quality cleaning services and
          value for money. We do more than “just clean”.
        </h2>
        <p>
          With a positive and proactive approach, Master Class Commercial
          Cleaning partners with clients, identifying their unique needs to
          develop a comprehensive and customised cleaning solution, which is
          constantly scrutinised, tweaked and adapted as required in our
          perpetual endeavour to exceed expectations.
        </p>
        <p>
          We work with our clients closely to determine their unique cleaning
          requirements, regardless of what industry they&apos;re in, before we
          set our management process in motion.{" "}
          <Link className="text-[#6578c1]" to={"/cleaning-services"}>
            You can read all about our extensive commercial cleaning and
            management process here.
          </Link>
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Not a One Size Fits All Approach
        </h2>
        <p>
          With highly trained staff and a multiple certifications, it&apos;s no
          question that our cleaning services are second to none. The difference
          when you choose our company is the personal touch that you&apos;ll
          receive. We go above and beyond to develop a relationship with our
          clients so that they feel completely comfortable with our service at
          all times. We&apos;ll work with you to develop a cleaning solution
          that is perfectly tailored to your facility, or business and
          we&apos;ll proactively suggest any changes that could save you money,
          or have any other manner of positive impacts on your business.
        </p>
        <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-semibold text-[#6578c1]">
          Systems and Support
        </h3>
        <p>
          Our cleaning process is supported by proactive managers who uphold the
          highest quality assurance standards. This results in our customers
          receiving a complete cleaning service at a competitive price. Our
          unique management system is why our clients feel completely and
          consistently satisfied with our service.
        </p>
        <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-semibold text-[#6578c1]">
          We Genuinely Care
        </h3>
        <p>
          Obviously committed to the highest industry standards in our field, we
          passionately pursue better ways of doing things, challenging the
          status quo and questioning everything. That&apos;s why we do things a
          little differently – to get the very best result for our clients,
          their stakeholders and the environment.
        </p>
        <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-semibold text-[#6578c1]">
          Accountable and Approachable
        </h3>
        <p>
          We&apos;ve built our business on family values – honesty, reliability
          and quality, and our customised cleaning solutions are supported by
          exceptional levels of communication.
        </p>
        <p>
          Check out our commercial
          <Link to={"/cleaning-services"}> cleaning services</Link> in more
          detail.
        </p>
      </section>
      <GetAQuote />
    </main>
  );
};

export default WhyChooseUs;
