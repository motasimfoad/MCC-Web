import { Link } from "react-router-dom";
import { whyChooseUsLinks } from "../../constants/header_links";

export default function WhyChooseUsHover() {
  return (
    <span className="relative group ">
      Why Choose Us
      <div className="absolute hidden group-hover:flex flex-col w-max -ml-2 overflow-hidden z-20 rounded-lg shadow-lg shadow-black/20 bg-[#e2e4e7]">
        {whyChooseUsLinks.map((link) => (
          <Link
            className="py-1 px-2 hover:py-2 text-black hover:text-[#e2e4e7] hover:bg-[#6578c1] duration-100"
            to={link.route}
            key={link.title}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </span>
  );
}
