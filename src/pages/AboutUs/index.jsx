/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Card, Image, Text } from "@geist-ui/core";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import GetAQuote from "../../components/Misc/GetAQuote";

const AboutUs = ({ title, description, canonicalUrl }) => {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          About MCC
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/about-mcc.webp)]"
          title={"Built on family values, from a company that cares"}
        />
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Proudly Canadian
        </h2>
        <p>
          Master Class Commercial Cleaning is a Canadian owned, cleaning company
          specializing in cleaning services across a broad range of industries
          including offices, commercial spaces, elderly care & retirement,
          education, childcare, retail, medical, industrial, sports and
          hospitality.
        </p>
        <p>
          We have built our business on the values of honesty, integrity and
          reliability, providing premium, and custom cleaning solutions to a
          range of small, medium and large businesses, all over southern
          Ontario.
        </p>
        <Card className="text-center" shadow width="100%">
          <FormatQuoteIcon
            className="rotate-180 text-[#6578c1]"
            fontSize="large"
          />
          <Text className="italic text-sm/7 md:text-base/8">
            We are a trusted Commercial Cleaning Services provider for over 16
            Years - Serving Burlington, Hamilton, Oakville, Mississauga, Toronto
            & the GTA | Master Class Commercial Cleaning. At Master Class
            Commercial Cleaning, we offer a wide range of services. Our goal is
            to provide you with a personalized and tailored cleaning experience
            that exceeds your expectations. We have built our business on the
            values of honesty, integrity and reliability, providing premium, and
            custom cleaning solutions for a range of small, medium and large
            businesses. Our cleaning process is supported by proactive managers
            who uphold the highest quality assurance standards. This results in
            our customers receiving a complete cleaning service at a competitive
            price. Our unique management system is why our clients feel
            completely and consistently satisfied with our services.
          </Text>
          <FormatQuoteIcon className="text-[#6578c1]" fontSize="large" />
        </Card>
      </section>
      <section className="flex flex-col md:flex-row items-start gap-2 my-12">
        <Card width="100%">
          <Image
            src="/images/about-us-images/image-5.webp"
            height="100%"
            width="100%"
            draggable={false}
          />
          <h3 className="mb-2 text-lg font-semibold text-[#6578c1]">
            Boutique business feel, big picture thinking
          </h3>
          <Text type="secondary">
            We pride our success in the commercial cleaning space on our ability
            to see our clients, not as numbers, prospects or jobs, but as
            people. Real human beings looking for a professional and qualified
            cleaning service, but with a personal touch. We&apos;re large enough
            to manage complex sites at a high level but small enough to care
            about each individual client. We&apos;ve built long-standing
            relationships with some of Canada&apos;s leading companies helping
            them to achieve their strategic cleaning requirements with our
            industry leading commercial cleaning solutions.
          </Text>
          <br />
          <Text type="secondary">
            The MCC Commercial Cleaning team provides professional cleaners, to
            service your needs in a timely manner.
          </Text>
        </Card>
        <Card width="100%">
          <Image
            src="/images/about-us-images/image-6.webp"
            height="100%"
            width="100%"
            draggable={false}
          />
          <h3 className="mb-2 text-lg font-semibold text-[#6578c1]">
            Specialised commercial cleaning
          </h3>
          <Text type="secondary">
            We have cleaning expertise in a range of different industries
            including office/commercial, elderly care, automotive, education,
            retail, medical, industrial, sports/leisure, hospitality and more –
            with consistent, reliable and efficient service.
          </Text>
          <br />
          <Text type="secondary">
            Our highly trained operations teams work closely with our clients to
            ensure we understand their specific cleaning requirements. We offer
            ongoing support and systems to ensure a high level of communication
            and transparency at all times.
          </Text>
          <br />
          <Text type="secondary">
            <Link to={"/locations"}>
              Learn more about the commercial cleaning services offered in your
              area.
            </Link>
          </Text>
        </Card>
      </section>
      <GetAQuote />
    </main>
  );
};

export default AboutUs;
