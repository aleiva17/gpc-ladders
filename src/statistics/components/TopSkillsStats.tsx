import {ReactElement} from "react";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {getSkillsSortedByFrequency} from "@/statistics/services/SkillService.ts";

type TopSkillsStatsProps = {
  submissions: Array<Submission>;
  count: number;
}

export const TopSkillsStats = ({submissions, count}: TopSkillsStatsProps): ReactElement => {
  const skillsStats = getSkillsSortedByFrequency(submissions).slice(0, count);

  return (
    <div>
      <h2 className="font-bold mb-2">Top {count} skills</h2>
      <div className="flex flex-wrap gap-2">
        {
          skillsStats.map((stat, id) => (
            <span key={id} className="font-medium bg-gray-200 rounded-full px-2 py-0.5">{stat.name}</span>
          ))
        }
      </div>
    </div>
  );
};