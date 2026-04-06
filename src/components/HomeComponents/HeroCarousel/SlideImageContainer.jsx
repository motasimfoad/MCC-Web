const SlideImageContainer = ({ element, activeIndex }) => {
  return (
    <>
      {element.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </>
  );
};

export default SlideImageContainer;
