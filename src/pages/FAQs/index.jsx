/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import { listItemsFAQs } from "../../constants";
import GetAQuote from "../../components/Misc/GetAQuote";

export default function FAQs({ title, description, canonicalUrl }) {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          FAQs
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/faq-mcc.webp)]"
          title={"Frequently Asked Questions (FAQs)"}
          position="bg-bottom"
        />
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Where is Master Class Commercial Cleaning located?
        </h2>
        <p>
          We have branches located all over southern Ontario from which we
          service a large range of locations across a variety of industries.
        </p>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          What does Master Class Commercial Cleaning specialize in?
        </h2>
        <p>
          MCC Cleaning has extensive experience servicing a variety of
          industries, therefore our list of specialities is quite broad. Some of
          our key focus areas are:
        </p>
        <ul className="px-2 space-y-4">
          {listItemsFAQs.map((item) => (
            <li className="px-2 border-l-2 border-[#6578c1]" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <Link className="text-[#6578c1]" to={"/cleaning-services"}>
          Check out our full commercial cleaning services here
        </Link>
      </section>
      <section className="space-y-2">
        <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-semibold text-[#6578c1]">
          What sets you apart from other commercial cleaners?
        </h3>
        <p>
          We are a business built on strong values. We have an excellent culture
          extending from our senior management to our operatives, with personal
          relationships at the forefront. We are passionate about what we do,
          and we are not afraid to do things differently if it means a better
          result for our clients.
        </p>
        <p>
          Additionally, we have certifications (WHIMS, Environmental and Quality
          Management Assurance), we are covered under WSIB and continually
          provide training and saftey procedures to all employees.
        </p>
        <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-semibold text-[#6578c1]">
          Do you use non-toxic cleaning products?
        </h3>
        <p>
          We sure do. Our cleaning products are natural, non-toxic, safe and
          effective - yielding a healthier outcome for your staff, and ours - as
          well as the environment. We try to use non-toxic products as much as
          possible.
        </p>
        <br />
        <p>
          You can read more about how we implement
          <Link className="text-[#6578c1]" to={"/environmentally-responsible"}>
            <span> environmentally responsible practices here.</span>
          </Link>
        </p>
      </section>
      <GetAQuote />
    </main>
  );
}
