import {ReactElement} from "react";
import {Link} from "react-router-dom";
import {AvatarDropdown} from "@/shared/components/AvatarDropdown.tsx";

export const AppToolbar = (): ReactElement => {
  const userIsLogged = true;

  return (
    <header className="sticky flex justify-between md:justify-around items-center top-0 p-4">
      <Link to="/" className="flex justify-center items-center hover:scale-95 duration-300 gap-2">
        <img
          src="/gpc-logo.png"
          alt="GPC UPC Logo"
          className="w-14 md:w-20 h-auto"
        />
        <span className="font-extrabold text-xl md:text-4xl">GPC Ladders</span>
      </Link>
      { userIsLogged && <AvatarDropdown /> }
    </header>
  );
};