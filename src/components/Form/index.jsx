import React from "react";
import InputField from "./InputField";
import { formInputData } from "../../constants";
import SubmissionSucessful from "./SubmissionSucessful";

export default function NewForm() {
  const [result, setResult] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const prodKey = "1c9eed49-2aba-4e21-8ea6-5adc1e5d8b08";
  // const devKey = "4a75f8c1-9e2b-405a-bca5-99cf20d95eb1";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", prodKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  if (result === "Form Submitted Successfully") return <SubmissionSucessful />;

  return (
    <div
      id="form"
      className="md:max-w-xl mx-auto p-6 rounded-xl shadow-xl bg-white"
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        <h2 className="text-lg md:text-xl text-center font-bold text-[#6578c1]">
          Please complete each field below.
        </h2>
        <input
          type="hidden"
          name="subject"
          value={`MCC Submission from ${subject}`}
        />
        <input type="hidden" name="from_name" value="MCC Form" />
        {formInputData.map((data) => (
          <InputField
            label={data.label.toLocaleLowerCase()}
            type={data.type}
            setSubject={setSubject}
            key={data.label}
          />
        ))}
        <label
          className="font-semibold capitalize text-[#6578c1]"
          htmlFor="comments"
        >
          Comments
        </label>
        <textarea
          id="comments"
          name="Comments"
          placeholder="Type Message"
          className="w-full mt-1 py-3 px-4 text-sm rounded border border-slate-500 transition-all bg-[#f0f1f2] focus:bg-transparent outline-[#007bff]"
          rows="4"
        />
        <button
          className="w-full mt-4 py-2.5 px-6 text-sm rounded bg-[#6578c1] active:bg-[#6578c1]/80 text-white"
          type="submit"
          disabled={result === "Sending...."}
          aria-label="Submit form"
        >
          Submit
        </button>
      </form>
      <p className="mt-2 text-center text-green-600">{result}</p>
    </div>
  );
}
