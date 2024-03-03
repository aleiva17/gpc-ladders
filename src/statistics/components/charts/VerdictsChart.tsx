import {ReactElement} from "react";
import {Chart} from "primereact/chart";
import {TooltipItem} from "chart.js";

type VerdictsChartProps = {
  data: object;
  totalData: number;
  title?: string;
}

export const VerdictsChart = ({data, totalData, title}: VerdictsChartProps): ReactElement => {
  return (
    <div className="bg-white dark:bg-darkest w-full rounded-xl drop-shadow p-4 md:p-6">
      <h2 className="font-bold mb-2">{title ?? "Ratio of verdicts"}</h2>
      <div className="flex justify-center min-w-0">
        <Chart
          type="pie"
          data={data}
          options={{
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context: TooltipItem<"pie">) {
                    const percentage = (parseFloat(context.formattedValue) / totalData * 100).toFixed(2);
                    return `${context.dataset.label}: ${context.formattedValue} (${percentage}%)`;
                  }
                }
              },
              legend: {
                labels: {
                  color: "#64748b"
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