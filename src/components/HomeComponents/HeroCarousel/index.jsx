import { useState, useEffect } from "react";
import SlideNextBtn from "./SlideNextBtn";
import "./style.css";
import SlidePrevBtn from "./SlidePrevBtn";
import SlideBottomDots from "./SlideBottomDots";
import SlideImageContainer from "./SlideImageContainer";
import SlideAutoPlay from "./SlideAutoPlay";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  SlideAutoPlay({
    element: children,
    setActiveIndex,
    slideDone,
    setSlideDone,
    setTimeID,
  });

  return (
    <div
      className="hero_carousel_container"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <SlideImageContainer activeIndex={activeIndex} element={children} />
      <SlideNextBtn setActiveIndex={setActiveIndex} element={children} />
      <SlidePrevBtn setActiveIndex={setActiveIndex} element={children} />
      <SlideBottomDots
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        element={children}
      />
    </div>
  );
}

export default CustomCarousel;
