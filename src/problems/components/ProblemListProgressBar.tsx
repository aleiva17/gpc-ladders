import {ReactElement} from "react";
import {ProgressBar} from "primereact/progressbar";

type ProblemListProgressBarProps = {
  numberOfSolvedProblems: number;
  totalNumberOfProblems: number;
}

export const ProblemListProgressBar = ({numberOfSolvedProblems, totalNumberOfProblems}: ProblemListProgressBarProps): ReactElement => {
  return (
    <ProgressBar
      value={ 100.0 * numberOfSolvedProblems / totalNumberOfProblems }
      className="mb-4"
      displayValueTemplate={
        () => <span>{numberOfSolvedProblems}/{totalNumberOfProblems}</span>
      }
    />
  );
};