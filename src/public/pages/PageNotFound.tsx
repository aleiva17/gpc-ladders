import {ReactElement} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {Link} from "react-router-dom";


export const PageNotFound = (): ReactElement => {
  return (
    <BaseLayout>
      <section className="flex flex-col justify-center items-center h-full">
        <img
          className="w-56 md:w-96 h-auto"
          src="/error-404.png"
          alt="Anime girl breaking the 4th wall"
        />
        <h1 className="text-6xl text-center font-extrabold mb-6">Oops!</h1>
        <p className="text-2xl text-center font-bold mb-2">Error 404: Page not found</p>
        <p className="text-center text-complementary-light dark:text-complementary-dark md:text-lg font-medium mb-4">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="bg-gpc-gradient text-white rounded-lg duration-300 drop-shadow-md font-semibold px-4 py-2">
          Go back to home
        </Link>
      </section>
    </BaseLayout>
  );
};