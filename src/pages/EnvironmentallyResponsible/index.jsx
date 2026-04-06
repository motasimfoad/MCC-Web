/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import { listItemsA, listItemsB } from "../../constants";
import GetAQuote from "../../components/Misc/GetAQuote";

const EnvironmentallyResponsible = ({ title, description, canonicalUrl }) => {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          Environmentally Responsible
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/eco-mcc.webp)]"
          title={"Frequently Asked Questions (FAQs)"}
          position="bg-center"
        />
        <p>
          Master Class Commercial Cleaning is devoted to protecting our planet
          and its future. We seek to conduct all aspects of our cleaning
          business in a way that protects the quality of the environment and
          yields a less toxic effect on both our staff and our clients.
        </p>
        <p>
          We strive for continual improvement of our environmental performance
          through systematic management practice in our{" "}
          <Link className="text-[#6578c1]" to={"/cleaning-services"}>
            cleaning services.
          </Link>{" "}
          To achieve this, we have implemented waste minimization processes and
          are committed to the prevention of pollution, with the overall
          objective of reducing our overall environmental impact wherever
          possible.
        </p>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Our Commitment
        </h2>
        <p>
          At{" "}
          <Link className="text-[#6578c1]" to={"/"}>
            Master Class Commercial Cleaning
          </Link>
          , we are committed to:
        </p>
        <ul className="px-2 space-y-4">
          {listItemsA.map((item) => (
            <li className="px-2 border-l-2 border-[#6578c1]" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Our Objectives
        </h2>
        <p>As part of our commitment to the environment, we strive to:</p>
        <ul className="px-2 space-y-4">
          {listItemsB.map((item) => (
            <li className="px-2 border-l-2 border-[#6578c1]" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <p>
          Are you ready to hire an environmentally friendly cleaning company for
          your
          <Link className="text-[#6578c1]" to={"/"}>
            {" "}
            commercial cleaning
          </Link>{" "}
          needs?
          <Link className="text-[#6578c1]" to={"/contact"}>
            {" "}
            Get in touch now.
          </Link>
        </p>
      </section>
      <GetAQuote />
    </main>
  );
};

export default EnvironmentallyResponsible;
