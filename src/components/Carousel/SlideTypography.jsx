const SlideTypography = ({ children, slide }) => {
  return (
    <div className={`${slide.styles.container}`}>
      <h1
        className={`text-base sm:text-xl md:text-2xl font-bold ${slide.styles.heading}`}
      >
        {slide.heading}
      </h1>
      {slide.paragraph && (
        <p
          className={`text-xs sm:text-sm font-light ${slide.styles.paragraph}`}
        >
          {slide.paragraph}
        </p>
      )}
      {children}
    </div>
  );
};

export default SlideTypography;
