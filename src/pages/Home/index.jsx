import Head from "../../components/Misc/Head";
import CarouselSlider from "../../components/Carousel";
import MCCExpert from "../../components/HomeComponents/MCCExpert";
import MCCNews from "../../components/HomeComponents/MCCNews";
import MCCAboutUs from "../../components/HomeComponents/MCCAboutUs";
import MCCServiceLocations from "../../components/HomeComponents/MCCServiceLocations";
import MCCClients from "../../components/HomeComponents/MCCClients";
import WorkSection from "../../components/HomeComponents/WorkSection";
import MCCProfile from "../../components/HomeComponents/MCCProfile";

// eslint-disable-next-line react/prop-types
const Home = ({ title, description, canonicalUrl }) => {
  return (
    <main>
      <Head title={title} description={description} url={canonicalUrl} />
      <CarouselSlider />
      <WorkSection />
      <section className="flex flex-col justify-center items-center">
        <MCCClients />
        <MCCServiceLocations />
        <MCCAboutUs />
        <MCCExpert />
        <MCCNews />
        <hr className="w-full h-2 mb-4 shadow-[0_6px_6px_-2px_rgba(0,_0,_0,_0.3)] border-none" />
        <MCCProfile />
      </section>
    </main>
  );
};

export default Home;
