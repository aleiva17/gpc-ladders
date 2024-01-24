import {ReactElement} from "react";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {ProblemRatingsChart} from "@/statistics/components/charts/ProblemRatingsChart.tsx";
import {VerdictsChart} from "@/statistics/components/charts/VerdictsChart.tsx";
import {TagsChart} from "@/statistics/components/charts/TagsChart.tsx";
import {
  getRatingDataForProblemRatingsChart, getTagsDataForTagDoughnutChart,
  getVerdictDataForVerdictRatioChart
} from "@/statistics/services/ChartService.ts";
import {getUniqueAcceptedSubmissions} from "@/problems/services/SubmissionService.ts";

type DetailedUserStatsProps = {
  submissions: Array<Submission>;
}

export const DetailedUserStats = ({submissions}: DetailedUserStatsProps): ReactElement => {
  const uniqueAcceptedSolutions = getUniqueAcceptedSubmissions(submissions);

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <ProblemRatingsChart data={getRatingDataForProblemRatingsChart(uniqueAcceptedSolutions)} />
      <VerdictsChart data={getVerdictDataForVerdictRatioChart(submissions)} totalData={submissions.length} />
      <TagsChart data={getTagsDataForTagDoughnutChart(uniqueAcceptedSolutions)} />
    </div>
  );
};