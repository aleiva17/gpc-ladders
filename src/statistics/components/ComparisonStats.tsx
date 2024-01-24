import {ReactElement} from "react";
import {UserBasicInfoCard} from "@/statistics/components/UserBasicInfoCard.tsx";
import {ProblemRatingsChart} from "@/statistics/components/charts/ProblemRatingsChart.tsx";
import {
  getComparedRatingsDataForProblemRatingsChart, getComparedTagsDataForTagHorizontalBarChart,
  getVerdictDataForVerdictRatioChart
} from "@/statistics/services/ChartService.ts";
import {VerdictsChart} from "@/statistics/components/charts/VerdictsChart.tsx";
import {getUniqueAcceptedSubmissions} from "@/problems/services/SubmissionService.ts";
import {NormalizeHandlePipe} from "@/shared/pipes/NormalizeHandlePipe.ts";
import {UserStatsData} from "@/statistics/domain/models/UserStatsData.tsx";
import {TagsChart} from "@/statistics/components/charts/TagsChart.tsx";

type ComparisonStatsProps = {
  firstUserData: UserStatsData;
  secondUserData: UserStatsData;
}

export const ComparisonStats = ({firstUserData, secondUserData}: ComparisonStatsProps): ReactElement => {
  const firstUniqueAcceptedSolutions = getUniqueAcceptedSubmissions(firstUserData.submissions);
  const secondUniqueAcceptedSolution = getUniqueAcceptedSubmissions(secondUserData.submissions);
  const firstUser = firstUserData.user;
  const secondUser = secondUserData.user;

  const firstHandle = NormalizeHandlePipe.transform(firstUserData.user.handle);
  const secondHandle = NormalizeHandlePipe.transform(secondUserData.user.handle);

  return (
    <div>
      <h2 className="font-bold mb-3">{firstHandle} vs {secondHandle}</h2>
      <div className="grid lg:grid-cols-2 dark:text-white gap-4 lg:gap-6 mb-4 lg:mb-6">
        <UserBasicInfoCard user={firstUser} submissions={firstUniqueAcceptedSolutions}/>
        <UserBasicInfoCard user={secondUser} submissions={secondUniqueAcceptedSolution}/>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <ProblemRatingsChart data={
          getComparedRatingsDataForProblemRatingsChart(
            firstUniqueAcceptedSolutions,
            secondUniqueAcceptedSolution,
            `${firstHandle}'s problem solutions`,
            `${secondHandle}'s problem solutions`
          )}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <VerdictsChart
            title={`${firstHandle}'s ratio of verdicts`}
            data={getVerdictDataForVerdictRatioChart(firstUserData.submissions)}
            totalData={firstUserData.submissions.length}
          />
          <VerdictsChart
            title={`${secondHandle}'s ratio of verdicts`}
            data={getVerdictDataForVerdictRatioChart(secondUserData.submissions)}
            totalData={secondUserData.submissions.length}
          />
        </div>
        <TagsChart data={
          getComparedTagsDataForTagHorizontalBarChart(
            firstUniqueAcceptedSolutions,
            secondUniqueAcceptedSolution,
            `${firstHandle}'s solved problems`,
            `${secondHandle}'s solved problems`
          )}
        />
      </div>
    </div>
  );
};