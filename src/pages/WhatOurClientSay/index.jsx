/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import GetAQuote from "../../components/Misc/GetAQuote";
import { Image } from "@geist-ui/core";

const WhatOurClientSay = ({ title, description, canonicalUrl }) => {
  const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8);

  return (
    <main className="cleaning_container max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="heading space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          What Our Clients Say
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/what-clients-say.webp)]"
          title={"Where would you be without them?"}
          position="bg-center"
          boxWidth="w-22 md:w-58"
        />
        <p>
          Our customers from various sectors, including industrial facilities,
          corporate offices, manufacturing, small businesses, from medical and
          healthcare organizations, childcare centres, retail, grocery stores,
          car showrooms and dealerships, schools and educational facilities and
          many more, have shared their heartfelt sentiments of thanks to the
          cleaning crews of
          <Link to={"/"}> Master Class Commercial Cleaning.</Link>
        </p>
        <p>
          We are deeply touched by this outpouring of messages as they resonate
          with our own thanks to the number of cleaning staff who turn up
          day-in-day out, on time, ready to do their best for every customer,
          every day. Our staff understand and embrace our mission - in the heart
          of everything we do at Master Class Commercial Cleaning, we believe
          it&apos;s important to look after people.
        </p>
      </section>
      <section className="flex flex-wrap justify-around items-center">
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Reviews
        </h2>
        <video
          autoPlay
          loop
          muted
          src="/videos/reviews-2.webm"
          title="reviews"
        ></video>
        {arr.map((image) => (
          <Image
            src={`/images/review-images/image-${image}.webp`}
            alt={`review ${image}`}
            key={image}
            width={"26"}
          />
        ))}
      </section>
      <GetAQuote />
    </main>
  );
};

export default WhatOurClientSay;
