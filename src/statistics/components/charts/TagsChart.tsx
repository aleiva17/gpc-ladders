import {ReactElement} from "react";
import {Chart} from "primereact/chart";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {getTagsDataForTagDoughnutChar} from "@/statistics/services/ChartService.ts";
import {getUniqueAcceptedSubmissions} from "@/problems/services/SubmissionService.ts";

type TagsChartProps = {
  submissions: Array<Submission>;
}

export const TagsChart = ({submissions}: TagsChartProps): ReactElement => {
  return (
    <div className="bg-white dark:bg-darkest w-full rounded-xl drop-shadow p-4 md:p-6">
      <h2 className="font-bold mb-2">Solved problem tags</h2>
      <Chart
        type="bar"
        data={getTagsDataForTagDoughnutChar(getUniqueAcceptedSubmissions(submissions))}
        options={{ indexAxis: "y" }}
      />
    </div>
  );
};