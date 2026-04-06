/* eslint-disable react/prop-types */
import { ChevronRight } from "@mui/icons-material";

const AccordionItem = ({ heading, paragraph, isExpanded, onToggle }) => {
  return (
    <div className="overflow-hidden rounded-md hover:shadow-lg bg-black/5 dark:bg-white/10_OFF duration-300">
      <button
        className={`w-full flex justify-between items-center p-2 cursor-pointer text-start text-[#6578c1] duration-300 ${
          isExpanded && "bg-black/10 dark:bg-white/10_OFF"
        }`}
        onClick={onToggle}
        type="button"
      >
        {heading}
        <span
          className={`duration-300 ${isExpanded ? "rotate-90" : "rotate-0"}`}
        >
          <ChevronRight />
        </span>
      </button>
      <div
        className={`duration-300 cursor-default italic text-black/75 dark:text-white/75_OFF ${
          isExpanded ? "max-h-96 md:max-h-28 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-2">{paragraph}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
