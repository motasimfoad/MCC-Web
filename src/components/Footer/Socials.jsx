import { Link } from "react-router-dom";
import { Image } from "@geist-ui/core";
import { social_images } from "../../constants";

const Socials = () => {
  return (
    <div>
      <p className="mb-2 font-bold">Connect with us</p>
      <ul className="flex gap-2">
        {social_images.map((icon, index) => {
          return (
            <li
              className="w-8 rounded overflow-hidden shadow-md shadow-black/25"
              key={index}
            >
              <Link to={icon.route} aria-label={icon.title} target="_blank">
                <Image
                  className="invert hover:invert-0 duration-300 hover:scale-125"
                  src={icon.image}
                  alt={icon.title}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
