/* eslint-disable react/prop-types */
import BookNowButtons from "./BookNowButtons";

const HeroSection = ({ heading, subHeading, description }) => {
  return (
    <section
      className="
      min-h-[calc(100dvh-8.4rem)] md:min-h-[calc(100dvh-5.5rem)] 
      flex flex-col justify-center items-center_OFF p-4 md:p-8 space-y-4 
      bg-center bg-cover 
      bg-[linear-gradient(90deg,_#000000_0%,_#ffffff00_100%),url(/images/cleaning-service-images/image-1.webp)] text-white"
    >
      <div className="max-w-[900px] space-y-2 md:space-y-4">
        <h1 className="text-xl">{heading}</h1>
        <h2 className="text-3xl md:text-5xl font-bold">{subHeading}</h2>
        <p className="text-sm md:text-balance">{description}</p>
      </div>
      <BookNowButtons className="flex flex-col md:flex-row gap-4" />
    </section>
  );
};

export default HeroSection;
