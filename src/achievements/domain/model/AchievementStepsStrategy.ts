import {ValidationPayload} from "@/achievements/domain/model/ValidationPayload.ts";

export type AchievementStepsStrategy = (payload: ValidationPayload) => number;