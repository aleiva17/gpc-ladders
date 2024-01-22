import {ReactElement} from "react";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {Chart} from "primereact/chart";
import {getRatingDataForProblemRatingsChart} from "@/statistics/services/ChartService.ts";
import {getUniqueAcceptedSubmissions} from "@/problems/services/SubmissionService.ts";

type ProblemRatingChartProps = {
  submissions: Array<Submission>;
}

export const ProblemRatingsChart = ({submissions}: ProblemRatingChartProps): ReactElement => {
  return (
    <div className="bg-white dark:bg-darkest w-full rounded-xl drop-shadow p-4 md:p-6">
      <h2 className="font-bold mb-2">Solved problem ratings</h2>
      <Chart
        type="bar"
        data={getRatingDataForProblemRatingsChart(getUniqueAcceptedSubmissions(submissions))}
        options={{
          maintainAspectRatio: false,
          aspectRatio: 0.8,
        }}
      />
    </div>
  );
};