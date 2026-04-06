import { Carousel } from "@mantine/carousel";
import { Image } from "@geist-ui/core";
import { client_images } from "../../../constants/home_page_data";

const ClientsSlider = () => {
  return (
    <Carousel
      className="mt-4 mb-6 rounded-lg shadow-lg overflow-hidden"
      withIndicators
      height={200}
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      slideGap={{ base: 0, sm: "md" }}
      slidesToScroll={{ base: 3, sm: 1 }}
      align="start"
      loop
    >
      {client_images.map((slide) => (
        <Carousel.Slide className="py-4 bg-white" key={slide.imgAlt}>
          <Image
            className="mix-blend-multiply"
            src={slide.imageURL}
            alt={slide.imgAlt}
            height={10}
          />
        </Carousel.Slide>
      ))}
      {/* ...other slides */}
    </Carousel>
  );
};

export default ClientsSlider;
