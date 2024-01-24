import {ReactElement} from "react";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {NormalizeVerdictPipe} from "@/statistics/pipes/NormalizeVerdictPipe.ts";

export const VerdictTemplate = (submission: Submission): ReactElement => {
  const verdict = NormalizeVerdictPipe.transform(submission.verdict).toLowerCase();

  if (verdict === "ok") {
    return (
      <span className="capitalize text-green-500 font-bold">Accepted</span>
    );
  }

  return (
    <span className="capitalize">{verdict}</span>
  );
};