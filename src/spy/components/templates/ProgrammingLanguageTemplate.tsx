import {Submission} from "@/problems/domain/model/Submission.ts";
import {ReactElement} from "react";
import {NormalizeProgrammingLanguagePipe} from "@/statistics/pipes/NormalizeProgrammingLanguagePipe.ts";

export const ProgrammingLanguageTemplate = (submission: Submission): ReactElement => {
  return (
    <span>{NormalizeProgrammingLanguagePipe.transform(submission.programmingLanguage)}</span>
  );
};