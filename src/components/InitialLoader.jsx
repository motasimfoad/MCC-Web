import { Link } from "react-router-dom";
import Brand from "./Header/Brand";

const InitialLoader = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <Brand className="h-8 md:h-12" />
      <p className="absolute bottom-8 text-[0.6rem]">
        Designed by{" "}
        <Link to={"mailto:realg701@gmail.com"}>realg701@gmail.com</Link>
      </p>
    </div>
  );
};

export default InitialLoader;
