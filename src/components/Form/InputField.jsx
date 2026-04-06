/* eslint-disable react/prop-types */
const InputField = ({ type, label, setSubject }) => {
  return (
    <div>
      <label
        className="font-semibold capitalize text-[#6578c1]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        name={label}
        onChange={
          label === "first name" ? (e) => setSubject(e.target.value) : null
        }
        required
        placeholder={`Enter your ${label}`}
        className="w-full mt-1 py-3 px-4 text-sm rounded border border-slate-500 transition-all bg-[#f0f1f2] focus:bg-transparent outline-[#007bff]"
      />
    </div>
  );
};

export default InputField;
