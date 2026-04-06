const BottomBavigation = ({ slides, current, setCurrent }) => {
  return (
    <div className="absolute w-full bottom-2 hidden lg:flex justify-center items-end gap-3">
      {slides.map((_slide, index) => (
        <button
          onClick={() => setCurrent(index)}
          className={`w-12 h-[3px] cursor-pointer ${
            index === current ? "bg-white/75" : "bg-white/25"
          }`}
          key={index}
        />
      ))}
    </div>
  );
};

export default BottomBavigation;
