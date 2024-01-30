import {CSSProperties, ReactElement} from "react";
import {AchievementProgressBar} from "@/achievements/components/AchievementProgressBar.tsx";
import {AchievementBadge} from "@/achievements/components/AchievementBadge.tsx";

type AchievementCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  currentSteps: number;
  totalSteps: number;
  badgeBorderStyle: CSSProperties;
}

export const AchievementCard = ({title, description, imageUrl, currentSteps, totalSteps, badgeBorderStyle}: AchievementCardProps): ReactElement => {
  const completed = currentSteps >= totalSteps;

  return (
    <div className="grid md:grid-cols-[auto_1fr] place-items-center md:place-items-start bg-white dark:bg-darkest drop-shadow-md rounded-xl gap-6 p-6">
      <div className="self-center">
        <AchievementBadge
          completed={completed}
          borderStyle={badgeBorderStyle}
          imageUrl={imageUrl}
        />
      </div>
      <div className="self-center w-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg text-complementary-light dark:text-complementary-dark">{description}</p>
        {
          !completed &&
          <AchievementProgressBar
            progressValueLabel={`${currentSteps}/${totalSteps}`}
            percentage={currentSteps / totalSteps * 100}
          />
        }
      </div>
    </div>
  );
};