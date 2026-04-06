import { Link } from "react-router-dom";
import { HeadsetMic, Info } from "@mui/icons-material";

const ContactBtn = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <Link
        className="flex justify-center items-center gap-2 py-1 px-8 rounded-full outline-2"
        to={"/contact"}
      >
        <HeadsetMic size={18} />
        Contact Us
      </Link>
      <Link
        className="flex justify-center items-center gap-2 py-1 px-8 rounded-full outline-2"
        to={"/about"}
      >
        <Info size={18} />
        About Us
      </Link>
    </div>
  );
};

export default ContactBtn;
