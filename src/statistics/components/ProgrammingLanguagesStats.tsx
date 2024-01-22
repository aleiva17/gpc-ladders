import {Submission} from "@/problems/domain/model/Submission.ts";
import {ReactElement} from "react";
import {getProgrammingLanguagesSortedByFrequency} from "@/statistics/services/ProgrammingLanguagesService.ts";

type ProgrammingLanguagesStatsProps = {
  submissions: Array<Submission>;
}

export const ProgrammingLanguagesStats = ({submissions}: ProgrammingLanguagesStatsProps): ReactElement => {
  const languagesStats = getProgrammingLanguagesSortedByFrequency(submissions);

  return (
    <div>
      <h2 className="font-bold mb-2">Programming Languages</h2>
      <div className="flex flex-col gap-2">
        {
          languagesStats.map((stat, id) => (
            <div key={id} className="flex justify-between items-center">
              <span className="font-medium bg-gray-200 dark:bg-complementary-dark dark:text-darkest rounded-full px-2 py-0.5">{stat.name}</span>
              <span className="text-xs">{stat.frequency} problem{Math.abs(stat.frequency) !== 1 && 's'} solved</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};