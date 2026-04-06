import { Link } from "react-router-dom";
import { DownloadForOffline, Email } from "@mui/icons-material";
import MCCClientsReview from "./MCCClientsReview";
import ClientsSlider from "./ClientsCarousel";
import { Image } from "@geist-ui/core";

export const youtubeVideo =
  "https://www.youtube.com/embed/2Gh1Ukwrhtk?si=ceoOuAlUA3Pwg7Q1";

const refLetters = [
  {
    title: "Reference Letter From Public Library",
    url: "/docs/reference-letter-from-public-library.pdf",
    image: "/images/library.webp",
    style: "h-[130px] py-6",
  },
  {
    title: "Reference Letter From Toromont Cimco",
    url: "/docs/reference-letter-from-toromont-cimco.pdf",
    image: "/images/cimco.webp",
  },
];

const MCCClients = () => {
  return (
    <section className="clients-section max-w-[1000px] text-center px-2">
      <h3 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
        Some of our clients
      </h3>
      <ClientsSlider />
      <MCCClientsReview />
      <video
        className="my-8 rounded-xl"
        src={"/videos/reviews-2.webm"}
        title="reviews"
        autoPlay
        loop
        muted
      />
      <iframe
        className="w-full h-[200px] md:h-[400px] rounded-xl"
        src={youtubeVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="my-4 space-y-2">
        <h4 className="font-semibold">
          We believe it’s important to look after people.
        </h4>
        <p>Read more about our capabilities</p>
        <Link to={"/docs/mcc-profile.pdf"} target="_blank">
          <p className="md:max-w-[400px] mx-auto py-2 space-x-1 rounded-md bg-[#6578c1] text-sm md:textbas text-white">
            <span> Download Company Profile</span>
            <DownloadForOffline />
          </p>
        </Link>
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:gap-32 mt-8">
          {refLetters.map((letter) => (
            <div className="w-full" key={letter.title}>
              <div
                className={`max-w-[300px] dark:mb-2_OFF px-4 rounded-lg dark:bg-white/80_OFF ${letter.style} mx-auto`}
              >
                <Image src={letter.image} alt="library" />
              </div>
              <Link to={letter.url} target="_blank">
                <p className="py-2 space-x-1 rounded-md bg-[#6578c1] text-sm md:textbas text-white">
                  <span>{letter.title}</span>
                  <Email />
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MCCClients;
