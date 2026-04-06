import CustomizedAccordions from "../Accordion";
import TrustedAffordable from "./TrustedAffordable";

const ServiceComponents = () => {
  return (
    <>
      <section className="max-w-[900px] mx-auto px-2 space-y-4">
        <h4 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Our commercial cleaning service includes:
        </h4>
        <div className="md:flex justify-between gap-4 space-y-2">
          <ul className="space-y-2">
            <li>Beauty salon cleaning</li>
            <li>Restaurant cleaning</li>
            <li>Clubs/music/photography studio cleaning</li>
            <li>Dental office cleaning</li>
            <li>Medical office cleaning</li>
            <li>Carpet cleaning</li>
            <li>Surface cleaning</li>
          </ul>
          <ul className="space-y-2">
            <li>Industrial Cleaning</li>
            <li>Educational Institute Cleaning</li>
            <li>Movein/ Move Out Cleaning</li>
            <li>AirBNB Cleaning Services</li>
            <li>Dusting</li>
            <li>Other cleaning solutions for commercial businesses</li>
          </ul>
        </div>
      </section>
      <section className="max-w-[900px] md:flex justify-between gap-4 my-12 mx-auto px-2 space-y-4">
        <div className="w-full">
          <img
            className="h-full object-cover rounded-xl shadow-lg"
            src="/images/cleaning-service-images/image-5.webp"
            alt=""
          />
        </div>
        <div className="w-full space-y-4">
          <h4 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
            How Does a Clean and Healthy Environment Affect Your Business?
          </h4>
          <CustomizedAccordions />
        </div>
      </section>
      <TrustedAffordable />
    </>
  );
};

export default ServiceComponents;
