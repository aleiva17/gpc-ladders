import {ReactElement} from "react";
import {ProblemList} from "@/problem-list/domain/model/ProblemList.ts";
import {Link} from "react-router-dom";

type ProblemListCardProps = {
  problemList: ProblemList;
}

export const ProblemListCard = ({ problemList }: ProblemListCardProps): ReactElement => {
  const { id, description, title, tags, imgUrl } = problemList;

  return (
    <Link
      to={`/problem-list/${id}`}
      className="flex flex-col md:flex-row gap-4 bg-white dark:bg-darkest rounded-2xl p-6 shadow-lg hover:scale-[1.03] items-center duration-300"
    >
      <img
        src={imgUrl}
        alt={`${title} icon`}
        className="h-32 w-32 rounded-full border-2 border-complementary-light dark:border-complementary-dark p-1"
      />
      <div className="grid grid-rows-[auto_1fr_auto] gap-2">
        <p className="font-bold text-darkest dark:text-light text-lg">{title}</p>
        <p className="text-complementary-light dark:text-complementary-dark">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {
            tags.map((tag, it) =>
              <span
                key={it}
                className="font-medium text-center px-2 py-0.5 bg-black dark:bg-gray-500 bg-opacity-10 rounded-md"
              >
                { tag }
              </span>
            )
          }
        </div>
      </div>
    </Link>
  );
};