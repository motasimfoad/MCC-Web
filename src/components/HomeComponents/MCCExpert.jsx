import React from "react";
import { expertOpinions } from "../../constants/home_page_data";
import AccordionItem from "../AccordionItem";

const MCCExpert = () => {
  const [expandedId, setExpandedId] = React.useState(null);

  const toggleExpand = (index) =>
    setExpandedId(expandedId === index ? null : index);

  return (
    <section className="max-w-[900px] my-8 px-2 space-y-2">
      <h3 className="text-center text-xl md:text-3xl font-semibold text-[#6578c1]">
        Ask an MCC Expert
      </h3>
      {expertOpinions.map((item, index) => (
        <AccordionItem
          isExpanded={expandedId === index}
          onToggle={() => toggleExpand(index)}
          {...item}
          key={index}
        />
      ))}
    </section>
  );
};

export default MCCExpert;
