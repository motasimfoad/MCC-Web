import { Link } from "react-router-dom";
import { Slides } from "../../data/slidesData";

const Button = ({ btnTxt, btnStyles, defaultStyles }) => (
  <Link
    to={"/products"}
    className={`py-1 px-2 sm:px-4 text-sm md:text-base xl:text-xl rounded-full hover:text-slate-200 ${
      btnStyles + " " + defaultStyles
    }`}
  >
    {btnTxt}
  </Link>
);

const SlideButtons = ({ slide }) => {
  return (
    <div className={`${slide.styles.btnContainer}`}>
      {slide.btnTxtA && (
        <Button
          btnTxt={slide.btnTxtA}
          btnStyles={slide.styles.btnTxtA}
          defaultStyles="bg-am[#FE8F00] hover:bg-[#FE7F00]"
        />
      )}
      {slide.btnTxtB && (
        <Button
          btnTxt={slide.btnTxtB}
          btnStyles={slide.styles.btnTxtB}
          defaultStyles="outline outline-2 outline-[#FE8F00]"
        />
      )}
    </div>
  );
};

export default SlideButtons;
