/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const HoverMenu = ({ title, routes, link }) => {
  const { pathname } = useLocation();

  return (
    <li
      className={`relative group py-1 rounded hover:bg-[#6578c1] hover:text-[#e2e4e7] ${
        pathname === link ? "bg-[#6578c1] text-[#e2e4e7]" : "bg-[#6578c1]/25"
      }`}
    >
      <Link className="py-1 px-2" to={link}>
        {title}
      </Link>
      <ul className="absolute hidden group-hover:block w-max mt-1 py-2 rounded-md shadow-lg shadow-black/20 bg-[#e2e4e7]">
        {routes.map((link) => (
          <li
            className={`hover:bg-[#6578c1] hover:text-[#e2e4e7] ${
              pathname === link.route
                ? "bg-[#6578c1] text-[#e2e4e7]"
                : "text-black"
            }`}
            key={link.title}
          >
            <Link className="block py-1 px-2 capitalize" to={link.route}>
              {link.title.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default HoverMenu;
