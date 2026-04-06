import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { work_section } from "../../constants/home_page_data";

export default function WorkSection() {
  return (
    <section className="my-8 space-y-2 text-center">
      <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
        Commercial Cleaning Solutions Across Southern Ontario
      </h1>
      <p className="">
        Looking after the health and wellbeing of people and workplaces
      </p>
      <Box className="flex flex-wrap justify-center items-start gap-4 md:gap-2 mt-4">
        {work_section.map((data) => {
          return (
            <Card
              className="max-w-[300px] text-center group"
              key={data.heading}
            >
              <h2 className="p-4 bg-[#6578c1] text-white font-semibold">
                {data.heading}
              </h2>
              <CardMedia
                className="w-auto h-[200px] group-hover:grayscale-75"
                image={data.image}
                alt={data.heading}
                component="img"
                height="194"
              />
              <Link to={"/contact"}>
                <CardHeader
                  className="group-hover:bg-[#6578c1]/50"
                  subheader="ENQUIRE NOW"
                />
              </Link>
            </Card>
          );
        })}
      </Box>
    </section>
  );
}
