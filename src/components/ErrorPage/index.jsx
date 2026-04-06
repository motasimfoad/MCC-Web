import { Link } from "react-router-dom";
import { Image } from "@geist-ui/core";

const ErrorPage = () => {
  return (
    <main className="max-w-[1370px] min-h-[calc(100dvh-8.4rem)] md:min-h-[calc(100dvh-5.5rem)] flex flex-col-reverse lg:flex-row justify-evenly items-center gap-8 sm:gap-24 mt -12 md:mt -24 mx-auto">
      <section className="relative flex justify-center items-center mb-12">
        <div className="font-mono text-[10rem] md:text-[14rem] font-extrabold text-black/5">
          404
        </div>
        <div className="absolute mt-8 space-y-4">
          <h1 className="text-3xl font-bold text-[#6578c1]">
            Sorry, this page isn&apos;t available.
          </h1>
          <p>
            The link you followed may be broken, or the page may have been
            removed. Go back to hompage.
          </p>
          <Link to={"/"}>
            <p className="py-2 text-center font-semibold rounded-md bg-[#6578c1] hover:bg-[#4e5d97] text-white">
              Take me there!
            </p>
          </Link>
        </div>
      </section>
      <section className="max-w-[400px] p-4 mix-blend-multiply">
        <Image src="/images/404.webp" alt="not found" loading="lazy" />
      </section>
    </main>
  );
};

export default ErrorPage;
