import {ReactElement} from "react";
import {Link} from "react-router-dom";

type ProblemGroupCardProps = {
  id: string;
  name: string;
}

export const ProblemGroupCard = ({ id, name }: ProblemGroupCardProps): ReactElement => {
  return (
    <Link
      to={id}
      className="group bg-gray-200 dark:bg-complementary-light hover:bg-gpc-purple dark:hover:bg-gpc-aqua font-bold rounded-xl drop-shadow-md text-3xl p-4"
    >
      <p className="text-gpc-purple dark:text-gpc-aqua group-hover:text-green-500 dark:group-hover:text-dark mb-6">+</p>
      <h2 className="uppercase group-hover:text-white">{name}</h2>
    </Link>
  );
};