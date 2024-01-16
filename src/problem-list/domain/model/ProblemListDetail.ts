import {Problem} from "@/problem-list/domain/model/Problem.ts";

export interface ProblemListDetail {
  title: string,
  problems: Array<Problem>
}