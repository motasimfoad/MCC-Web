import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SlideNextBtn = ({ element, setActiveIndex }) => {
  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= element.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  return (
    <button className="slider__btn-next" onClick={slideNext}>
      {<ArrowForwardIosIcon />}
    </button>
  );
};

export default SlideNextBtn;
