import {ReactElement} from "react";
import {Chart} from "primereact/chart";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {getVerdictDataForVerdictRatioChart} from "@/statistics/services/ChartService.ts";
import {TooltipItem} from "chart.js";

type VerdictsChartProps = {
  submissions: Array<Submission>;
}

export const VerdictsChart = ({submissions}: VerdictsChartProps): ReactElement => {
  return (
    <div className="bg-white dark:bg-darkest w-full rounded-xl drop-shadow p-4 md:p-6">
      <h2 className="font-bold mb-2">Ratio of verdicts</h2>
      <div className="flex justify-center min-w-0">
        <Chart
          type="pie"
          data={getVerdictDataForVerdictRatioChart(submissions)}
          options={{
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context: TooltipItem<"pie">) {
                    const percentage = (parseFloat(context.formattedValue) / submissions.length * 100).toFixed(2);
                    return `${context.dataset.label}: ${context.formattedValue} (${percentage}%)`;
                  }
                }
              }
            }
          }}
          className="lg:w-2/3"
        />
      </div>
    </div>
  );
};