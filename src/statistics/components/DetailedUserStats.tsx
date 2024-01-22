import {ReactElement} from "react";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {ProblemRatingsChart} from "@/statistics/components/charts/ProblemRatingsChart.tsx";
import {VerdictsChart} from "@/statistics/components/charts/VerdictsChart.tsx";
import {TagsChart} from "@/statistics/components/charts/TagsChart.tsx";

type DetailedUserStatsProps = {
  submissions: Array<Submission>;
}

export const DetailedUserStats = ({submissions}: DetailedUserStatsProps): ReactElement => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <ProblemRatingsChart submissions={submissions} />
      <VerdictsChart submissions={submissions} />
      <TagsChart submissions={submissions} />
    </div>
  );
};