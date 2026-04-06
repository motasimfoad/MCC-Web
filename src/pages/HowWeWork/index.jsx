/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Image } from "@geist-ui/core";
import Head from "../../components/Misc/Head";
import GetAQuote from "../../components/Misc/GetAQuote";

export default function HowWeWork({ title, description, canonicalUrl }) {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          How We Work
        </h1>
        <p>
          At Master Class Commercial Cleaning, we employ rigorous, high-quality
          management principles across our entire organization. This results in
          highly efficient and comprehensive services that our clients can
          trust.
        </p>
        <p>
          With regards to your{" "}
          <Link className="text-[#6578c1]" to={"/"}>
            commercial cleaning
          </Link>{" "}
          requirements, we implement a three-tiered approach, resulting in a
          high quality, personalized cleaning service.
        </p>
        <ul className="px-2 space-y-4">
          <li className="px-2 border-l-2 border-[#6578c1]">
            <strong>Dedicated Site Supervisor</strong>
            <br />
            Your site supervisor is your main point of contact and is
            responsible for the day-to-day management of staff and ensuring a
            consistently high quality cleaning service.
          </li>
          <li className="px-2 border-l-2 border-[#6578c1]">
            <strong>Customer Service Manager</strong>
            <br />
            As a support mechanism for the site supervisor, your Customer
            Service Manager will be responsible for conducting regular site
            audits, ensuring that cleaning standards are performed to a high
            level, and weekly priorities are set and achieved for your location.
          </li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Approachable & Accountable
        </h2>
        <p>
          Our Site Supervisor & Customer Service Manager are available 24 hours
          a day, 7 days a week to assist you with cleaning and maintenance
          issues - it&apos;s like having your own building or facility manager,
          without the massive overhead!
        </p>
        <p>
          Primarily, their role is to successfully induct cleaning staff into
          your premises to execute your cleaning services as per your
          requirements, with no disruption to your business whatsoever.
          Additionally, they will follow up with you and offer ongoing quality
          control and support.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <Image src="/images/working_images/work-1.webp" alt="worker image" />
          <Image src="/images/working_images/work-2.webp" alt="worker image" />
          <Image src="/images/working_images/work-3.webp" alt="worker image" />
        </div>
        <p>
          <Link className="text-[#6578c1]" to={"/contact"}>
            Get in touch
          </Link>{" "}
          with us to discuss the{" "}
          <Link className="text-[#6578c1]" to={"/"}>
            Master Class Commercial Cleaning
          </Link>{" "}
          Master Class Commercial Cleaning management process in further detail
          or to request a cleaning quote.
        </p>
      </section>
      <GetAQuote />
    </main>
  );
}
