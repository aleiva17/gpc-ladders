import {Submission} from "@/problems/domain/model/Submission.ts";
import {ReactElement} from "react";

export const ViewCodeTemplate = (submission: Submission): ReactElement => {
  return (
    <a
      href={
        `https://codeforces.com/contest/${submission.problem.contestId}/submission/${submission.id}/`
      }
      target="_blank"
      referrerPolicy="no-referrer"
      className="font-medium underline-offset-2 hover:underline hover:text-gpc-purple dark:hover:text-gpc-aqua"
    >
      Open
    </a>
  );
};