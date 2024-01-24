import {Submission} from "@/problems/domain/model/Submission.ts";
import {ReactElement} from "react";
import {BytesToKilobytesPipe} from "@/spy/pipes/BytesToKilobytesPipe.ts";

export const MemoryConsumedTemplate = (submission: Submission): ReactElement => {
  return (
    <span>{BytesToKilobytesPipe.transform(submission.memoryConsumedBytes)}</span>
  );
};