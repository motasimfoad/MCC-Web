import { Image } from "@geist-ui/core";
import { trusted_affordable_data } from "../../constants/service_page_data";

const TrustedAffordable = () => {
  return (
    <section className="max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <h4 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
        Why We&apos;re One of the Best Cleaning Services in Toronto
      </h4>
      <p>
        We value customer satisfaction the same way you value your business. We
        know our job continues until we&apos;ve removed every speck of dust from
        every surface and cleaned every piece of equipment in every corner of
        your facility.
      </p>
      <p>
        If that&apos;s not enough to convince you, here are some reasons why
        we&apos;re the best service provider and why our clients never look for
        other cleaning services in Toronto after experiencing the quality of our
        work.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {trusted_affordable_data.map((card) => (
          <div
            className="md:w-[calc(50%-1rem)] flex flex-col p-4 space-y-2 rounded-xl shadow-lg text-center bg-slate-300"
            key={card.title}
          >
            <Image
              style={{ maxWidth: "80px", maxHeight: "80px" }}
              src={card.image}
              alt="Bonded and Insured"
            />
            <h4 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
              {card.title}
            </h4>
            {card.description.map((desc) => (
              <p key={desc}>{desc}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedAffordable;
