import {ReactElement} from "react";
import {Chart} from "primereact/chart";

type TagsChartProps = {
  data: object;
}

export const TagsChart = ({data}: TagsChartProps): ReactElement => {
  return (
    <div className="bg-white dark:bg-darkest w-full rounded-xl drop-shadow p-4 md:p-6">
      <h2 className="font-bold mb-2">Solved problem tags</h2>
      <Chart
        type="bar"
        data={data}
        options={{ indexAxis: "y" }}
      />
    </div>
  );
};