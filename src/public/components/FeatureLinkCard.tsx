import {ReactElement} from "react";
import {Link} from "react-router-dom";

type FeatureLinkCardProps = {
  destination: string;
  logoUrl: string;
  logoAlt: string;
  title: string;
  description: string;
  isSmall?: boolean;
}

export const FeatureLinkCard = ({ destination, logoUrl, logoAlt, title, description, isSmall }: FeatureLinkCardProps): ReactElement => {
  return (
    <Link
      to={destination}
      className={`flex items-center bg-white dark:bg-darkest drop-shadow-md text-black rounded-xl ${ isSmall ? "h-32 md:h-28" : "h-56"} hover:scale-95 duration-300 gap-8 p-4`}
    >
      <img src={logoUrl} alt={logoAlt} className="h-1/2 md:h-full w-auto" />
      <div>
        <h2 className="text-2xl font-semibold dark:text-white">{title}</h2>
        <p className="dark:text-complementary-dark">{description}</p>
      </div>
    </Link>
  );
};