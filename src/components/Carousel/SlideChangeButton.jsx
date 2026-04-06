/* eslint-disable react/prop-types */
const SlideChangeButton = ({ handlSwitch, icon, position, titleToolTip }) => {
  return (
    <button
      type="button"
      aria-label={titleToolTip}
      name={titleToolTip}
      className={`absolute top-1/2 lg:top-2/3 ${position} -translate-y-1/2 bg-black/15 text-white/50 hover:bg-black/50`}
      onClick={handlSwitch}
    >
      {icon}
    </button>
  );
};

export default SlideChangeButton;
