/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Head from "../../components/Misc/Head";
import GetAQuote from "../../components/Misc/GetAQuote";

export default function PrivacyPolicy({ title, description, canonicalUrl }) {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2 space-y-4">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          Privacy Policy
        </h1>
        <p className="text-gray-500">
          This following document sets forth the Privacy Policy for the
          <Link to={"/"}> Master Class Commercial Cleaning </Link> website,
        </p>
        <p>
          Master Class Commercial Cleaning is committed to providing you with
          the best possible customer service experience.
          <Link to={"/"}> Master Class Commercial Cleaning </Link> is bound by
          the Privacy Act 1988 (Cth), which sets out a number of principles
          concerning the privacy of individuals.
        </p>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Collection of your personal information
        </h2>
        <p>
          There are many aspects of the site which can be viewed without
          providing personal information, however, for access to future Master
          Class Commercial Cleaning customer support features you are required
          to submit personally identifiable information. This may include but
          not limited to a unique username and password, or provide sensitive
          information in the recovery of your lost password.
        </p>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Use of your personal information
        </h2>
        <p>
          For each visitor to reach the site, we expressively collect the
          following non-personally identifiable information, including but not
          limited to browser type, version and language, operating system, pages
          viewed while browsing the Site, page access times and referring
          website address. This collected information is used solely internally
          for the purpose of gauging visitor traffic, trends and delivering
          personalized content to you while you are at this Site.
        </p>
        <p>
          From time to time, we may use customer information for new,
          unanticipated uses not previously disclosed in our privacy notice. If
          our information practices change at some time in the future we will
          use for these new purposes only, data collected from the time of the
          policy change forward will adhere to our updated practices.
        </p>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Changes to this Privacy Policy
        </h2>
        <p>
          Master Class Commercial Cleaning reserves the right to make amendments
          to this Privacy Policy at any time. If you have objections to the
          Privacy Policy, you should not access or use the Site.
        </p>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Accessing Your Personal Information
        </h2>
        <p>
          You have a right to access your personal information, subject to
          exceptions allowed by law. If you would like to do so, please let us
          know. You may be required to put your request in writing for security
          reasons. Master Class Commercial Cleaning reserves the right to charge
          a fee for searching for, and providing access to, your information on
          a per request basis.
        </p>
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Contacting us
        </h2>
        <p>
          Master Class Commercial Cleaning welcomes your comments regarding this
          Privacy Policy. If you have any questions about this Privacy Policy
          and would like further information, please contact us by any of the
          following means during business hours Monday to Friday.
        </p>
      </section>
      <GetAQuote />
    </main>
  );
}
