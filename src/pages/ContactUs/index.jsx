/* eslint-disable react/prop-types */
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import { contactNumber, emailAddress } from "../../components/Misc/GetAQuote";
import NewForm from "../../components/Form";

const ContactUs = ({ title, description, canonicalUrl }) => {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="heading space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          Contact MCC
        </h1>
        <ImageBlackBox
          image={"bg-[url(/images/about-us-images/contact-mcc.webp)]"}
          title={"We are here to listen to your needs and requests."}
        />
        <p>
          Please feel free to contact us if you have any questions or enquiries.
          Whether you require cleaning services or just want to ask us something
          about cleaning in general, we would love to hear from you!
        </p>
        <p>
          You can send us an email at{" "}
          <a href={"mailto:" + emailAddress}>{emailAddress}</a>, call us{" "}
          <a href={"tel:" + contactNumber}>{contactNumber}</a> or contact us via
          the form below.
        </p>
        <NewForm />
      </section>
    </main>
  );
};

export default ContactUs;
