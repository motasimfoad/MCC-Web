import React from "react";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import BottomBavigation from "./BottomBavigation";
import SlideChangeButton from "./SlideChangeButton";
import { carousel_images } from "../../constants/home_page_data";

const CarouselSlider = () => {
  const [current, setCurrent] = React.useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(carousel_images.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === carousel_images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden lg:-mt-44">
      {/* Slider Content */}
      <div
        className={`w-full h-full flex transition-all ease-out duration-500`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carousel_images.map((slide) => (
          <img
            className="object-cover"
            loading="lazy"
            src={slide.imgURL}
            alt="slides"
            key={slide.link}
          />
        ))}
      </div>
      {/* Slider Previous Button */}
      <SlideChangeButton
        handlSwitch={previousSlide}
        icon={<ChevronLeft size={32} />}
        position={"left-4"}
        positionToolTip={"justify-start"}
        titleToolTip={"Previous"}
      />
      {/* Slider Next Button */}
      <SlideChangeButton
        handlSwitch={nextSlide}
        icon={<ChevronRight size={32} />}
        position={"right-4"}
        positionToolTip={"justify-end"}
        titleToolTip={"Next"}
      />
      {/* Slider Bottom Navigation Buttons */}
      <BottomBavigation
        slides={carousel_images}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default CarouselSlider;
