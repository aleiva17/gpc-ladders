import {Submission} from "@/problems/domain/model/Submission.ts";
import {ReactElement} from "react";
import {MillisecondsPipe} from "@/spy/pipes/MillisecondsPipe.ts";

export const TimeConsumedTemplate = (submission: Submission): ReactElement => {
  return (
    <span>{MillisecondsPipe.transform(submission.timeConsumedMillis)}</span>
  );
};