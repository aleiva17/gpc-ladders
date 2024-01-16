import {ReactElement} from "react";
import {Problem} from "@/problem-list/domain/model/Problem.ts";

export const ActionTemplate = (problem: Problem): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center text-sm gap-1">
      <a
        href={
          problem.preferredOpenProblemLink ?? `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`
        }
        target="_blank"
        referrerPolicy="no-referrer"
        className="font-medium underline-offset-2 hover:underline hover:text-gpc-purple dark:hover:text-gpc-aqua"
      >
        Open link
      </a>
      {
        problem.solutionLink !== undefined &&
          <a
            href={problem.solutionLink}
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-medium underline-offset-2 hover:underline hover:text-gpc-purple dark:hover:text-gpc-aqua"
          >
            View solution
          </a>
      }
    </div>
  );
};