import {CSSProperties} from "react";
import {AchievementStepsStrategy} from "@/achievements/domain/model/AchievementStepsStrategy.ts";

export interface Achievement {
  title: string;
  description: string;
  imageUrl: string;
  totalSteps: number;
  badgeBorderStyle: CSSProperties;
  getCurrentSteps: AchievementStepsStrategy;
}