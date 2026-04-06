/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ImageBlackBox from "../Misc/ImageBlackBox";

const SubmissionSucessful = () => {
  return (
    <main className="max-w-[900px] min-h -dvh my-12 mx-auto px-2 space-y-4">
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          MCC Cleaning Form submitted successfully!
        </h1>
        <ImageBlackBox
          image="bg-[url(/images/about-us-images/success-message.webp)]"
          position="bg-center"
        />
        <p className="-mt-[3.2rem] sm:-mt-[0.6rem]  md:-mt-[4.6rem] ml-2 text-center text-xs sm:text-lg font-medium tracking-wider text-green-500 [#6578c1]">
          {/* Thank you! The form has been submitted successfully.  */}
          We will contact you very soon!
        </p>
        <Link to={"/"}>
          <p className="py-2 text-center bg-[#6578c1] text-white">Go back</p>
        </Link>
      </section>
    </main>
  );
};
export default SubmissionSucessful;
