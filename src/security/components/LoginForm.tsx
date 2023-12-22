import {ReactElement, useEffect, useRef} from "react";

export const LoginForm = (): ReactElement => {
  const codeforcesHandleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    codeforcesHandleRef.current?.focus();
  }, []);

  const handleLink = (): void => {
    if (!codeforcesHandleRef.current || codeforcesHandleRef.current.value.length === 0) {
      return;
    }

  }

  return (
    <div
      className="grid grid-cols-1 grid-rows-[auto_1fr] items-center shadow-2xl bg-white dark:bg-darkest rounded-3xl pt-12 pb-8 px-8 gap-10">
      <section className="flex flex-col items-center">
        <img
          src="/gpc-logo.png"
          alt="GPC UPC Logo"
          className="h-32 w-auto"
        />
        <p className="text-5xl font-bold text-center text-darkest dark:text-light mt-3 mb-1">Login</p>
        <p className="text-center font-semibold text-lg text-complementary-light dark:text-complementary-dark">Welcome back!</p>
      </section>
      <section className="flex flex-col text-complementary-light dark:text-complementary-dark">
        <span className="font-semibold">Codeforces handle</span>

        <div
          className="flex items-center w-56 border-2 border-darkest dark:border-complementary-dark focus-within:border-gpc-purple dark:focus-within:border-gpc-aqua focus-within:text-gpc-purple dark:focus-within:text-gpc-aqua rounded-lg p-1 gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <input
            ref={codeforcesHandleRef}
            type="text"
            className="w-full text-lg outline-none bg-transparent text-darkest dark:text-light border-none"
            placeholder="Username"
          />
        </div>

        <button
          className="bg-gpc-purple dark:bg-gpc-aqua hover:bg-gpc-purple-darker dark:hover:bg-gpc-aqua-darker duration-300 rounded-lg text-white font-semibold mt-4 px-4 py-2"
          onClick={handleLink}
        >
          Link account
        </button>
      </section>
    </div>
  );
};