/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { navbar_links } from "../../constants/header_links";
import AccordionMenu from "./AccordionMenu";

export default function MobileMenu() {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);
  const [expandedId, setExpandedId] = React.useState(null);

  const handleClick = () => setOpen(!open);

  const toggleExpand = (index) =>
    setExpandedId(expandedId === index ? null : index);

  return (
    <div className="block md:hidden">
      <button
        onClick={handleClick}
        type="button"
        aria-label="Close mobile navigation menu"
      >
        {!open ? <Menu fontSize="large" /> : <Close fontSize="large" />}
      </button>
      {open && (
        <ul className="absolute w-full mx-auto sm:w-auto top-11 right-0 sm:right-1 overflow-hidden z-50 rounded-md shadow-lg shadow-black/20 bg-[#e2e4e7]">
          {navbar_links.map((link) =>
            !link.routes ? (
              <li
                className={`${
                  pathname === link.route
                    ? "bg-[#6578c1] text-[#e2e4e7]"
                    : "bg-[#6578c1]/10"
                } hover:bg-[#6578c1] hover:text-[#e2e4e7]`}
                key={link.title}
              >
                <Link className="block p-2" to={link.route}>
                  {link.title}
                </Link>
              </li>
            ) : (
              <AccordionMenu
                key={link.title}
                link={link}
                isExpanded={expandedId === link.title}
                onToggle={() => toggleExpand(link.title)}
              />
            )
          )}
        </ul>
      )}
    </div>
  );
}
