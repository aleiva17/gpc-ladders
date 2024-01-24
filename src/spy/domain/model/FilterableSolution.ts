import {Submission} from "@/problems/domain/model/Submission.ts";

export interface FilterableSolution extends Submission {
  problemId: string;
}