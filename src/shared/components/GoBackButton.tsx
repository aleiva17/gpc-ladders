import {ReactElement} from "react";
import {Link} from "react-router-dom";

type GoBackButtonProps = {
  destination: string
}

export const GoBackButton = ({ destination }: GoBackButtonProps): ReactElement => {
  return (
    <Link
      to={destination}
      className="group flex items-center hover:text-gpc-purple dark:hover:text-gpc-aqua font-semibold gap-1 text-lg w-fit mt-12 mb-8"
    >
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <span>Go back</span>
    </Link>
  );
}