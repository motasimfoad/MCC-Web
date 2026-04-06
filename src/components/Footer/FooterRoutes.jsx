import React from "react";
import { Link } from "react-router-dom";

const footerRoutes = [
  {
    title: "About",
    route: "/about",
    label: "Read more about MasterClass Commercial Cleaning (MCC)",
  },
  {
    title: "Locations",
    route: "/locations",
    label: "Read more about Locations we operate",
  },
  {
    title: "Privacy Policy",
    route: "/privacy-policy",
    label: "Read more about Privacy Policy",
  },
];

const FooterRoutes = () => {
  return (
    <div>
      <Link
        to={"/"}
        aria-label="Home page of MasterClass Commercial Cleaning (MCC)"
      >
        Home
      </Link>
      {footerRoutes.map((route) => (
        <React.Fragment key={route.title}>
          {" | "}
          <Link to={route.route} aria-label={route.label}>
            {route.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FooterRoutes;
