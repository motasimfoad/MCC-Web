import { Link, useLocation } from "react-router-dom";
import { navbar_links } from "../../constants/header_links";
import HoverMenu from "./HoverMenu";

const DesktopMenu = () => {
  const { pathname } = useLocation();

  return (
    <ul className="hidden md:flex flex-wrap items-center gap-1 md:ml-6 2xl:ml-12">
      {navbar_links.map((link, index) =>
        !link.routes ? (
          <Link to={link.route} key={index}>
            <li
              className={`py-1 px-2 rounded ${
                pathname === link.route
                  ? "bg-[#6578c1] text-[#e2e4e7]"
                  : "bg-[#6578c1]/25"
              } hover:bg-[#6578c1] hover:text-[#e2e4e7]`}
            >
              {link.title}
            </li>
          </Link>
        ) : (
          <HoverMenu
            key={link.title}
            title={link.title}
            routes={link.routes}
            link={link.route}
          />
        )
      )}
    </ul>
  );
};

export default DesktopMenu;
