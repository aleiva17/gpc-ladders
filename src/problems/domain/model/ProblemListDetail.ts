import {Problem} from "@/problems/domain/model/Problem.ts";

export interface ProblemListDetail {
  title: string,
  problems: Array<Problem>
}