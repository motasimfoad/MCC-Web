/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import { service_card_data } from "../../constants/service_page_data";
import ServiceCard from "../../components/Misc/ServiceCard";
import GetAQuote from "../../components/Misc/GetAQuote";

const CleaningServices = ({ title, description, canonicalUrl }) => {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          Cleaning Services
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/cleaning-services.webp)]"
          title={"Master Class Commercial Cleaning Services"}
          position="bg-center"
        />
        <p>
          Master Class Commercial Cleaning, providing highly professional,
          comprehensive and cost-effective commercial cleaning services across
          southern Ontario, including BURLINGTON, HAMILTON, OAKVILLE,
          MISSISSAUGA, MILTON, TORONTO, and BARRIE. Let us handle all of your
          commercial cleaning needs, and enjoy peace of mind, knowing that you
          are in reliable hands.
        </p>
      </section>
      <section className="flex flex-wrap justify-center gap-4 my-12">
        {service_card_data().map((cardData, index) => (
          <ServiceCard cardData={cardData} key={index} />
        ))}
      </section>
      <section className="space-y-2">
        <h3 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          We are professional
        </h3>
        <p>
          Having been in the commercial cleaning industry, we have developed
          processes and systems, including extensive training, to ensure our
          business is just as professional as yours. You can expect highly
          trained staff, knowledge and appreciation of compliance requirements
          depending on your business, and, of course consistent and reliable
          service. Our extensive experience has allowed MCC to become one of
          Canada&apos;s most recognised cleaning companies.
        </p>
        <h3 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          We are progressive
        </h3>
        <p>
          Just because we&apos;ve been doing this for a long time, doesn&apos;t
          make us old school. As one of the most established commercial cleaning
          companies in Canada, we are constantly scrutinising the way things are
          done, and questioning if there is a better way. At the end of the day,
          we are concerned with providing you high quality, and cost effective
          commercial cleaning solutions. Rest assured our management team is
          well informed when it comes to best practice cleaning standards, and
          are continually working to ensure that MCC remains cutting edge.
        </p>
        <h3 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          We are Proactive
        </h3>
        <p>
          Our three-tiered management approach breeds proactivity amongst all of
          our staff. Our managers uphold the highest quality assurance standards
          and will do whatever they can to add value to their relationship with
          you.
        </p>
        <p>
          With humble beginnings in residential and office cleaning, we have
          grown to now service a wide variety of industries and commercial
          cleaning applications. Please explore our range of specialised
          services below.
        </p>
        <p>
          Our cleaning services include Offices, Retail, Medical, Schools,
          Recreation facilities,Industrial and Child Care centres.
        </p>
        <p>
          On top of our core cleaning services outlined above, clients are also
          delighted to find that we&apos;re also proficient in a range of
          additional cleaning services including:
        </p>
        <p>
          <strong>Carpet Cleaning: </strong> Carpet Maintenance Cleaning
          Services, Steam-Cleaning Services, Carpet Protection and Carpet
          Anti-Static Treatment.
        </p>
        <p>
          <strong>Upholstery Cleaning: </strong> General cleaning, Upholstery
          Protection, Leather Cleaning.
        </p>
        <p>
          <strong>Strip and Seal: </strong> Full ‘strip and seal&apos; services,
          stripping old polish and applying new polish on a wide range of
          surfaces, including wood, tiles, lino and vinyl.
        </p>
        <p>
          <strong>Window Cleaning: </strong> We offer a comprehensive range of
          window cleaning services, including high-rise buildings (using
          platforms and abseiling where required).
        </p>
        <p>
          <strong>Graffiti Removal: </strong> Our expert operators specialising
          in graffiti removal combine the right technique, materials and
          equipment to ensure an effective and individual approach for each job.
        </p>
        <p>
          <strong>Emergency Service: </strong> Emergency cleaning needs,
          post-flood clean-ups.
        </p>
        <p>
          Please <Link to={"/contact"}>contact us</Link> to discuss your
          specific needs further.
        </p>
      </section>
      <GetAQuote />
    </main>
  );
};

export default CleaningServices;
