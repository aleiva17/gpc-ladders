import {ReactElement} from "react";
import {Chart} from "primereact/chart";

type ProblemRatingChartProps = {
  data: object;
}

export const ProblemRatingsChart = ({data}: ProblemRatingChartProps): ReactElement => {
  return (
    <div className="bg-white dark:bg-darkest w-full rounded-xl drop-shadow p-4 md:p-6">
      <h2 className="font-bold mb-2">Solved problem ratings</h2>
      <Chart
        type="bar"
        data={data}
        options={{
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          scales: {
            x: {
              ticks: {
                color: "#64748b"
              },
              grid: {
                color: "#4b5563"
              }
            },
            y: {
              ticks: {
                color: "#64748b"
              },
              grid: {
                color: "#4b5563"
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: "#64748b"
              }
            }
          }
        }}
      />
    </div>
  );
};