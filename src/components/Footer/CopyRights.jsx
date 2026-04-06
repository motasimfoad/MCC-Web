import { Link } from "react-router-dom";

const CopyRights = () => {
  return (
    <section className="md:flex justify-between items-center space-y-2 py-4 md:px-4 text-xs font-sans">
      <div>
        <p>
          Copyright © 2024{" "}
          <Link className="hover:text-[#FE8F00]" to="/">
            MasterClass Commercial Cleaning
          </Link>{" "}
          Ltd. All Rights Reserved.
        </p>
        <p>
          <Link className="underline hover:text-[#FE8F00]" to="/privacy-policy">
            Privacy Policy
          </Link>
          {" | "}
          <Link className="underline hover:text-[#FE8F00]" to="/site-map">
            Site Map
          </Link>
        </p>
      </div>
      <p>
        Designed by{" "}
        <Link
          className="underline hover:text-[#FE8F00]"
          to={"mailto:@realg701"}
        >
          @realg701
        </Link>
      </p>
    </section>
  );
};

export default CopyRights;
