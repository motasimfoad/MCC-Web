/* eslint-disable react/prop-types */
const ImageBlackBox = ({
  image,
  title,
  position,
  height,
  heightMd,
  boxWidth,
}) => {
  return (
    <section
      className={`${height || "h-[150px]"} ${
        heightMd || "md:h-[300px]"
      } ${image} ${position || "bg-bottom"} bg-cover`}
    >
      {title && (
        <div
          className={`float-end flex items-center ${
            boxWidth || "w-[40%] md:w-[30%]"
          } h-[150px] md:h-[300px] bg-black/40 backdrop-blur`}
        >
          <p className="px-2 md:px-4 text-sm md:text-2xl text-white">{title}</p>
        </div>
      )}
    </section>
  );
};

export default ImageBlackBox;
