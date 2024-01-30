import {ReactElement} from "react";

type AchievementProgressBarProps = {
  progressValueLabel: string;
  percentage : number;
}

export const AchievementProgressBar = ({percentage, progressValueLabel}: AchievementProgressBarProps): ReactElement => {
  return (
    <div className="mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gpc-purple dark:text-gpc-aqua">Progress</span>
        <span className="text-sm font-medium text-gpc-purple dark:text-gpc-aqua">{progressValueLabel}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-gpc-purple dark:bg-gpc-aqua h-2.5 rounded-full" style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  );
}