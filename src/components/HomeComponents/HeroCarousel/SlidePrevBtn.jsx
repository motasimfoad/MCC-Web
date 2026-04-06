import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SlidePrevBtn = ({ element, setActiveIndex }) => {
  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return element.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  return (
    <button className="slider__btn-prev" onClick={slidePrev}>
      {<ArrowBackIosIcon />}
    </button>
  );
};

export default SlidePrevBtn;
