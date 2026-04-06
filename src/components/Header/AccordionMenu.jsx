/* eslint-disable react/prop-types */
import { ChevronRight } from "@mui/icons-material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const AccordionMenu = ({ link, isExpanded, onToggle }) => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <li
        className={`flex justify-between items-center hover:bg-[#6578c1] hover:text-[#e2e4e7] ${
          pathname === link.route
            ? "bg-[#6578c1] text-[#e2e4e7]"
            : "bg-[#6578c1]/10"
        }`}
      >
        <Link className="w-full p-2" to={link.route}>
          {link.title}
        </Link>
        <button
          className={`px-2 ${
            isExpanded ? "rotate-90" : "rotate-0"
          } duration-300`}
          onClick={onToggle}
          type="button"
          aria-label="Expand sub-menu"
        >
          <ChevronRight />
        </button>
      </li>
      <div
        className={`overflow-hidden ease-in-out duration-300 ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {link.routes.map((link) => (
          <li key={link.title}>
            <Link
              className={`block p-2 capitalize ${
                pathname === link.route ? "bg-[#6578c1] text-[#e2e4e7]" : ""
              } hover:bg-[#6578c1] hover:text-[#e2e4e7]`}
              to={link.route}
            >
              {link.title.toLowerCase()}
            </Link>
          </li>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AccordionMenu;
