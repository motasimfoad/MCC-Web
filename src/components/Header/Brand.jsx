/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Brand = ({ className, width, height, size }) => {
  return (
    <Link to={"/"}>
      <img
        className={className}
        src="/images/brand.webp"
        alt="logo"
        loading="lazy"
        width={width || size}
        height={height || size}
      />
    </Link>
  );
};

export default Brand;
