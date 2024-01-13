import {Problem} from "@/problem-list/domain/model/Problem.ts";

export interface ProblemGroup {
  name: string;
  problems: Array<Problem>
}