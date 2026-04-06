/* eslint-disable react/prop-types */
import { Card, Image, Text } from "@geist-ui/core";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import { youtubeVideo } from "../../components/HomeComponents/MCCClients";
import { vs_card_data } from "../../constants";
import GetAQuote from "../../components/Misc/GetAQuote";

const SurfaceDisinfection = ({ title, description, canonicalUrl }) => {
  return (
    <main className="cleaning_container max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          Surface Disinfection
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/surface-disinfection.webp)]"
          title={"Specialists in Surface Disinfection"}
          position="bg-center"
        />
        <p>
          MCC Cleaning offers an extensive range of surface disinfection
          services which can be deployed speedily to prevent the transmission of
          infectious pathogens. These specialized disinfection services are
          conducted safely and discreetly abiding by regulatory compliance and
          industry standards.
        </p>
        <iframe
          className="w-full h-[200px] md:h-[400px] mt-4 rounded-xl"
          src={youtubeVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>
      <section className="space-y-2 text-center">
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Cleaning vs. Disinfection
        </h2>
        <p>
          Cleaning before disinfection is critical as organic matter and dirt
          reduces the ability of disinfectants to kill germs.
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 my-4 text-center">
          {vs_card_data.map((card) => (
            <Card
              style={{ backgroundColor: card.bgclr, color: "#eeeeee" }}
              key={card.title}
            >
              <Image
                src={card.image}
                height="140px"
                width="100px"
                draggable={false}
              />
              <Text h4 className="text-2xl font-semibold tracking-wider">
                {card.title}
              </Text>
              <Text className="font-sans px-4">{card.text} </Text>
            </Card>
          ))}
        </div>
      </section>
      <section className="reviews space-y-2 ">
        <h3 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Why MCC Cleaning specialist for surface disinfection services?
        </h3>
        <p>
          We have extensive experience across high-risk industry sectors such as
          aged care, medical, healthcare, childcare, food retail and many more.
          This has resulted in the development of specialized processes, skills
          and technology to mitigate risk of contamination.
        </p>
        <p>
          High traffic sectors such as supermarkets, car showrooms, retail
          stores and schools as well as large and small corporate offices have
          the benefit of gaining quick and speedy disinfection services. Which
          means people can get back to work or school quickly and have a safe
          and clean environment.
        </p>
        <Image
          src="/images/about-us-images/image-5.webp"
          alt="Cleaning specialist"
        />
        <div className="services-img flex flex-col md:flex-row justify-center items-center gap-2 mt-2">
          <Image
            src="/images/about-us-images/image-3.webp"
            alt="Cleaning specialist"
          />
          <Image
            src="/images/about-us-images/image-4.webp"
            alt="Cleaning specialist"
          />
          <Image
            width={29.8}
            src="/images/about-us-images/image-6.webp"
            alt="Cleaning specialist"
          />
        </div>
      </section>
      <GetAQuote />
    </main>
  );
};

export default SurfaceDisinfection;
