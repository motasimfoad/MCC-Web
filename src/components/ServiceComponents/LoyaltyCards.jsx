import { Image } from "@geist-ui/core";

const LoyaltyCards = () => {
  return (
    <section className="max-w-[1000px] flex flex-wrap justify-center md:justify-between items-center md:items-end gap-4 my-12 mx-auto text-lg font-semibold text-[#6578c1]">
      <div className="w-80 flex flex-col justify-center items-center py-4 px-8 rounded-lg shadow-md hover:shadow-xl truncate duration-300">
        <Image
          width={"80px"}
          src="../../../images/cleaning-service-images/card-1.svg"
          alt="Bonded and Insured"
        />
        <p>Bonded and Insured</p>
      </div>
      <div className="w-80 flex flex-col justify-center items-center py-4 px-8 rounded-lg shadow-md hover:shadow-xl truncate duration-300">
        <Image
          width={"80px"}
          src="../../../images/cleaning-service-images/card-2.svg"
          alt="Professional Team"
        />
        <p>Professional Team</p>
      </div>
      <div className="w-80 flex flex-col justify-center items-center py-4 px-8 rounded-lg shadow-md hover:shadow-xl truncate duration-300">
        <Image
          width={"80px"}
          src="../../../images/cleaning-service-images/card-3.svg"
          alt="Satisfaction Guarantee"
        />
        <p>100% Satisfaction Guarantee</p>
      </div>
    </section>
  );
};

export default LoyaltyCards;
