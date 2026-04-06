import React from "react";

const SlideAutoPlay = ({
  element,
  setActiveIndex,
  slideDone,
  setSlideDone,
  setTimeID,
}) => {
  React.useEffect(() => {
    const slideNext = () => {
      setActiveIndex((val) => {
        if (val >= element.length - 1) {
          return 0;
        } else {
          return val + 1;
        }
      });
    };

    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone, setSlideDone, element, setTimeID, setActiveIndex]);
};

export default SlideAutoPlay;
