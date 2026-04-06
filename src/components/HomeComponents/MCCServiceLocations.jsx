import { Link } from "react-router-dom";

const locations = [
  "BURLINGTON",
  "HAMILTON",
  "OAKVILLE",
  "MISSISSAUGA",
  "TORONTO",
  "MILTON",
  "BARRIE",
];

const MCCServiceLocations = () => {
  return (
    <section className="max-w-[900px] my-12 space-y-2 md:space-y-4 text-center">
      <h3 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
        Cleaning service locations
      </h3>
      <p>
        We are proud to be the preferred cleaners for commercial premises all
        over Canada. Get in touch today to see how we work with you to service
        your <Link to={"/"}> commercial cleaning </Link> needs no matter where
        you are located.
      </p>
      <div className="md:flex justify-between items-center my-8 mx-auto space-y-4 md:space-y-0 font-bold md:text-lg text-[#6578c1]">
        {locations.map((location) => (
          <p key={location}>
            <Link to={"/contact"}>{location}</Link>
          </p>
        ))}
      </div>
    </section>
  );
};

export default MCCServiceLocations;
