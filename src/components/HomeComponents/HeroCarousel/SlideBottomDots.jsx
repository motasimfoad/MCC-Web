const SlideBottomDots = ({ element, activeIndex, setActiveIndex }) => {
  return (
    <div className="container__slider__links">
      {element.map((item, index) => {
        return (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={() => setActiveIndex(index)}
          ></button>
        );
      })}
    </div>
  );
};

export default SlideBottomDots;
